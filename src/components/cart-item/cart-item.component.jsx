
import { CartItemContainer, ItemDefault } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={ imageUrl } alt={`${name}`} />
      <ItemDefault>
        <h2 className='name'>{ name }</h2>
        <span className='price'>{ quantity } x ${price}</span>
      </ItemDefault>
    </CartItemContainer>
  )

};

export default CartItem;