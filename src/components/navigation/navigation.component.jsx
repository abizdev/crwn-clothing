import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

// import { ReactComponent as CrwnLogo } from '/src/assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-cotnainer" to='/'>
          <img src="../../assets/crown.svg" alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
        </div>
      </nav>
      
      <Outlet />
    </Fragment>
  )
}

export default Navigation