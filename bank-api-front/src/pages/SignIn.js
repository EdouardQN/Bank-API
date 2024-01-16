import {useState} from 'react'
import { dataForm } from '../api/mock/mock'


const SignIn = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const authentification = (e) => {
    e.preventDefault();
    console.log("user", user)
    console.log("password", password)
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={authentification}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input onChange={(e) => setUser(e.target.value)} type="text" id="username" />
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
        </section>
      </main>
    </>

  )
}

export default SignIn