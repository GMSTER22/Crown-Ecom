
import { ReactComponent as ShoppinIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ( { onClickHandler } ) => {

  return (

    <div className='cart-icon-container' onClick={ onClickHandler }>
      <ShoppinIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>

  )

}

export default CartIcon;