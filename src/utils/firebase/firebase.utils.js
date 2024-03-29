// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc,
    collection,
    writeBatch,
    query, 
    getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6mmecwdVnIYjSn3z5Ld1QyI087wQjVJs",
  authDomain: "crown-ecom-db-698f3.firebaseapp.com",
  projectId: "crown-ecom-db-698f3",
  storageBucket: "crown-ecom-db-698f3.appspot.com",
  messagingSenderId: "807188754595",
  appId: "1:807188754595:web:b1b60017e889e9e1910f16"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

    const batch = writeBatch(db);

    const collectionRef = collection(db, collectionKey);

    objectsToAdd.forEach( object => {

        const docRef = doc(collectionRef, object.title.toLowerCase());
       
        batch.set(docRef, object);

    } );

    await batch.commit();

}

export const getCategoriesAndDocuments = async () => {

    const collectionRef = collection(db, 'categories');

    const q = query(collectionRef);

    const querySnapshot = await getDocs( q );
    
    return querySnapshot.docs.map( docSnapshot => docSnapshot.data() );

}

export const createUserDocumentFromAuth = async(userAuth, additionalInformation) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async ( email, password ) => {

    if ( !email || !password ) return;
    
    return await createUserWithEmailAndPassword( auth, email, password );

}

export const signInAuthUserWithEmailAndPassword = async ( email, password ) => {

    if ( !email || !password ) return;

    return await signInWithEmailAndPassword(auth, email, password);

}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = ( callback ) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
    
    return new Promise( ( resolve, reject ) => {

        const unsubscribe = onAuthStateChanged(

            auth,
            userAuth => {
                unsubscribe();
                resolve(userAuth);
            },
            reject

        );

    } );

};