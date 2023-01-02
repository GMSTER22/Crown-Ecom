
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, ProductCardButton, ProductCardFooter } from './product-card.styles';

const ProductCard = ({ product }) => {

  const { id, name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

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