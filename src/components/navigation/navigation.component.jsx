import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../context/user.context";

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-cotnainer" to='/'>
          <img src="/src/assets/crown.svg" alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          <Link className="nav-link" to='/auth'>SIGN IN</Link>
        </div>
      </nav>
      
      <Outlet />
    </Fragment>
  )
}

export default Navigation