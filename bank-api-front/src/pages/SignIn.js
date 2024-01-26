import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import { userProfile } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  

  const handleUserConnection = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }
  useEffect(() => {
    if (token) {
      dispatch(userProfile(token))
      navigate('/profile')
    }
  }, [token, navigate, dispatch])

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleUserConnection}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>           
          </form>
          {error && (
          <div>
            <br />
            {error}
          </div>
        )}
        </section>
      </main>
    </>

  )
}

export default SignIn