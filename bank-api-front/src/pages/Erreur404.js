import React from 'react'
import { NavLink } from 'react-router-dom'

const Erreur404 = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
          <h2>Sorry, the page you're looking for does not exists</h2>
          <NavLink className="main-nav-redirect" to="/">
            Return to the home page
          </NavLink>
        </div>
    </main>
  )
}

export default Erreur404