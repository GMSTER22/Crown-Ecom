
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import { addItemToCart } from '../../store/cart/cart.action';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, ProductCardButton, ProductCardFooter } from './product-card.styles';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const { id, name, price, imageUrl } = product;

  const cartItems = useSelector( selectCartItems );

  const addProductToCart = () => dispatch(addItemToCart(product, cartItems));

  return (

    <ProductCardContainer id={id}>

      <img src={imageUrl} alt={ name } />

      <ProductCardFooter>

        <span className='name'>{ name }</span>

        <span className='price'>{ price }</span>

      </ProductCardFooter>

      <ProductCardButton buttonType={ BUTTON_TYPE_CLASSES.inverted } onClick={addProductToCart}>Add to card</ProductCardButton>

    </ProductCardContainer>

  )

}

export default ProductCard;
