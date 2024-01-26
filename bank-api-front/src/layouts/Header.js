import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authActions';
import { profileReset } from '../actions/userActions';

import logo from '../designs/img/argentBankLogo.png'

const Header = () => {

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(profileReset());
    
  }

  return (
    <>
      {token ?  
      
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
          <NavLink className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            Tony
          </NavLink>
          <NavLink onClick={handleLogout} to="/" className="main-nav-item" >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      </nav> 

      :

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
      }     
    </>
  )
}

export default Header