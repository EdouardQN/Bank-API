import {useState} from 'react'
import arrowDown from '../designs/img/down-arrow.svg'
import pen from '../designs/img/pen-solid.svg'

const Transaction = () => {

  const [isActive, setIsActive] = useState(false);
  const [iconReversed, setIconReversed] = useState(false);

  function toggleDescription() {
    setIsActive(!isActive);
    setIconReversed(!iconReversed);
  }

  return (
    <div className='transaction-dropdown'>
      {/* src à changer quand ce sera un composant */}
      <div className='transaction-dropdown-header'>
        <img className= {iconReversed ? 'transaction-dropdown-icon icon-reverse' : 'transaction-dropdown-icon' }
         src={arrowDown} alt='dropdown icon' onClick={toggleDescription}/>
        <p>June 20th, 2020</p>
        <p>Golden Sun Bakery</p>
        <p>$5.00</p>
        <p>$2082.79</p>
      </div>
      <div className= {isActive ? 'transaction-dropdown-details' : 'transaction-dropdown-details hidden' }>
        <p>Transaction Type: Electronic</p>
        <p>Category: Food <img className='transaction-dropdown-details-pen' src={pen} alt='edit icon' /></p>
        <p>Notes:  <img className='transaction-dropdown-details-pen' src={pen} alt='edit icon' /></p>
      </div>
    </div>
  )
}

export default Transaction