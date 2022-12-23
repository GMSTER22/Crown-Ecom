
import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context"; 

import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../components/utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const { dropdownStatus, setDropdownStatus } = useContext(CartDropdownContext);

  const changeDropdownStatus = () => setDropdownStatus( ! dropdownStatus );
  // const changeDropdownStatus = () => console.log('clicked');
  
  const signOutHandler = async () => {

    try {

      await signOutUser();

    } catch(error) {

      alert(error.code);

    }

  }

  return (
    <Fragment>
      <div className="navigation">

        <Link className="logo-container" to={"/"}>
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to={"/auth"}>
                SIGN IN
              </Link>
          )}
          <CartIcon onClickHandler={ changeDropdownStatus } />
        </div>

        { dropdownStatus && <CartDropdown /> }

      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;