import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import LogoSvg from '../../assets/crown.svg'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDroprdown from "../cart-dropdown/card-dropdown.component";


import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";
// import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={LogoSvg} alt="logo" className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        { isCartOpen && <CartDroprdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
