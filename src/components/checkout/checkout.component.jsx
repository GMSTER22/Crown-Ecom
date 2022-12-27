
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {

  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

  return cartItems.map( cartItem => (

    <div key={cartItem.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <img src={cartItem.imageUrl}/>
      <span>{cartItem.name}</span>
      <div>
        <button onClick={() => removeItemFromCart(cartItem)}>&lt;</button>
        <span style={{margin: "0px 10px"}}>{cartItem.quantity}</span>
        <button onClick={() => addItemToCart(cartItem)}>&gt;</button>
      </div>
      <span>{cartItem.price}</span>
      <button>X</button>
    </div>

  ) )

}

export default Checkout;