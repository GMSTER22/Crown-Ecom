
import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {

  const existingCartItem = cartItems.find( cartItem => cartItem.id === productToAdd.id );

  if ( existingCartItem ) {

    return cartItems.map(cartItem => cartItem.id === productToAdd.id 
      
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
      
    )

  }

  return [ ...cartItems, { ...productToAdd, quantity: 1 } ]

}

const removeCartItem = (cartItems, cartItemToRemove) => {

  const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {

    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

  }

  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id 
      
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
    
  )

}

const clearCartItem = ( cartItems, cartItemToClear ) => cartItems.filter( cartItem => cartItem.id !== cartItemToClear.id );


const setIsCartOpen = ( bool ) => createAction( CART_ACTION_TYPES.SET_IS_CART_OPEN, bool );

const addItemToCart = ( cartItems, productToAdd ) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, addCartItem(cartItems, productToAdd));

const removeItemFromCart = ( cartItems, cartItemToRemove ) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, removeCartItem(cartItems, cartItemToRemove));

const clearItemFromCart = ( cartItems, cartItemToClear ) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, clearCartItem(cartItems, cartItemToClear));

export { addItemToCart, removeItemFromCart, clearItemFromCart, setIsCartOpen };
