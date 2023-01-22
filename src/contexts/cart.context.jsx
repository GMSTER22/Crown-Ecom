
// import { createContext, useReducer } from "react";

// import { createAction } from "../utils/reducer/reducer.utils";

// const addCartItem = (cartItems, productToAdd) => {

//   const existingCartItem = cartItems.find( cartItem => cartItem.id === productToAdd.id );

//   if ( existingCartItem ) {

//     return cartItems.map(cartItem => cartItem.id === productToAdd.id 
      
//       ? { ...cartItem, quantity: cartItem.quantity + 1 }
//       : cartItem
      
//     )

//   }

//   return [ ...cartItems, { ...productToAdd, quantity: 1 } ]

// }

// const removeCartItem = (cartItems, cartItemToRemove) => {

//   const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToRemove.id);

//   if (existingCartItem.quantity === 1) {

//     return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

//   }

//   return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id 
      
//     ? { ...cartItem, quantity: cartItem.quantity - 1 }
//     : cartItem
    
//   )

// }

// const clearCartItem = ( cartItems, cartItemToClear ) => cartItems.filter( cartItem => cartItem.id !== cartItemToClear.id );

// export const CartContext = createContext({
//   isCartOpen:  false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0
// });

// const CART_ACTION_TYPES = {

//   SET_CART_ITEMS: 'SET_CART_ITEMS',

//   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'

// };

// const INITIAL_STATE = {

//   isCartOpen: false,

//   cartItems: [],

//   cartCount: 0,

//   cartTotal: 0

// }

// const cartReducer = ( state, action ) => {

//   const { type, payload } = action;

//   switch( type ) {

//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload
//       }
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload
//       }
//     default:
//       throw new Error(`unhandled type of ${type} in cartReducer`);

//   }

// }

// export const CartProvider = ({ children }) => {

//   const [ { isCartOpen, cartItems, cartCount, cartTotal }, dispatch ] = useReducer( cartReducer, INITIAL_STATE );

//   //   const newCartCount = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);

//   //   setIsCartOpen(newCartCount);

//   // }, [cartItems]);

//   // useEffect(() => {

//   //   const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

//   //   setCartCount(newCartTotal);

//   // }, [cartItems]);

//   const updateCartItemsReducer = ( newCartItems ) => {

//     const newCartCount = newCartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);

//     const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

//     dispatch(
//       createAction( CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems: newCartItems, 
//         cartCount: newCartCount, 
//         cartTotal: newCartTotal       
//       })
//     );
//   }

//   const addItemToCart = ( productToAdd ) => {

//     updateCartItemsReducer(addCartItem(cartItems, productToAdd));

//   }

//   const removeItemFromCart = ( cartItemToRemove ) => {

//     updateCartItemsReducer(removeCartItem(cartItems, cartItemToRemove));

//   }

//   const clearItemFromCart = ( cartItemToClear ) => {

//     updateCartItemsReducer(clearCartItem(cartItems, cartItemToClear));

//   }

//   const setIsCartOpen = ( bool ) => dispatch( createAction( CART_ACTION_TYPES.SET_IS_CART_OPEN, bool ) );

//   const value = { isCartOpen, setIsCartOpen, cartItems, cartCount, cartTotal, addItemToCart, removeItemFromCart, clearItemFromCart };

//   return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>

// }
