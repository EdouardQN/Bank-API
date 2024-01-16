import React from 'react'
import Transaction from '../layouts/Transaction'

const Transactions = () => {

  const transactions = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
    marginTop:"-4px",
  }
  
  const amount = {
    margin:"0",
    fontSize:"54px"
  }

  return (
    <main className='main'>
      <div style={transactions}>
        <span>Argent Bank Checking</span>
        <h2 style={amount}>$2,082.79</h2>
        <span>Available Balance</span>  
      </div>

      <div className='transaction'>
        <div className='transaction-columns'>
          <span>DATE</span>
          <span>DESCRIPTION</span>
          <span>AMOUNT</span>
          <span>BALANCE</span>
        </div>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />

        
      </div>
    </main>
  )
}

export default Transactions