import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Transaction from '../layouts/Transaction'

const Transactions = () => {

  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/') 
    }
  }, [token, navigate])

  return (
    <main className='main'>
      <div className='transactions'>
        <span>Argent Bank Checking</span>
        <h2 className='transactions-amount'>$2,082.79</h2>
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