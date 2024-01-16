import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../designs/img/argentBankLogo.png'

const Header = () => {
  return (
    <>
      {/* DISCONNECTED USER */}
      <nav className="main-nav">
          <NavLink className="main-nav-logo" to="/">
              <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
          </NavLink>
          <div>
            <NavLink className="main-nav-item" to="/signin">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </div>
      </nav>
      {/* CONNECTED USER */}
      {/* <nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./user.html">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <a class="main-nav-item" href="./index.html">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav> */}
    </>
  )
}

export default Header