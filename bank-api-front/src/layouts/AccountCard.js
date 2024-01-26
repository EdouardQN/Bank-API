import React from 'react'
import { useNavigate } from 'react-router-dom'

const AccountCard = (account) => {

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/profile/transactions') ;
  }
  
  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title"> {account.name} </h3>
          <p className="account-amount">
            ${account.amount}
          </p>
          <p className="account-amount-description">
            {account.description}
          </p>
        </div>
        <div className="account-content-wrapper cta">
          <button onClick={handleNavigation} className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  )
}

export default AccountCard