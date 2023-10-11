import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDroprdown from "../cart-dropdown/card-dropdown.component";

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-cotnainer" to="/">
          <img src="/src/assets/crown.svg" alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDroprdown />
      </nav>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
