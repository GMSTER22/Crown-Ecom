import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = { 
  displayName: "", 
  email: "", 
  password: "", 
  confirmPassword: "" 
};


const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if ( password !== confirmPassword ) {

      alert("passwords don't match");

      return;

    };

    try {

      const { user } = await createAuthUserWithEmailAndPassword( email, password );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();

    } catch(error) {

      if (error.code === 'auth/email-already-in-use') alert('Cannot create user, email already in use');

      else console.log("user creation encountered an error", error);

    }
  
  }

  const handleChange = (event) => {

    const {name, value} = event.target;

    setFormFields({ ...formFields, [name]: value });

  };

  return (
    
    <SignUpContainer>

      <h2>Don't have an account?</h2>
      <h3>Sign up with your email and password</h3>

      <form onSubmit={handleSubmit}>

        <FormInput 
          label="Display Name"
          type="text" 
          onChange={handleChange} 
          name="displayName" 
          value={displayName} 
          required
        />
        
        <FormInput
          label="Email" 
          type="email" 
          onChange={handleChange} 
          name="email" 
          value={email} 
          required             
        />
        
        <FormInput
          label="Password" 
          type="password" 
          onChange={handleChange} 
          name="password" 
          value={password} 
          required             
        />

        <FormInput
          label="Confirm password" 
          type="password" 
          onChange={handleChange} 
          name="confirmPassword" 
          value={confirmPassword} 
          required             
        />

        <Button type="submit">
          Sign Up
        </Button>

      </form>

    </SignUpContainer>

  )

}

export default SignUpForm;