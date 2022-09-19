import './transfer.style.scss'

import { useState } from 'react';
import Warning from '../../../components/warning/warning.component';
import Keypad from '../../../components/keypad/keypad.component';


const Transfer = () => {
  const [amt, setAmt] = useState({ filled: false,  amount: '', warning: false });
  
  const handleClick = e => {
    if (amt.amount.length < 5) {
      if (e.target.id === '0' && amt.amount === '') { return }
      else { setAmt( prev => { return { ...prev, amount: amt.amount + e.target.id, filled: true }}); }
    } else handleWarning();
  }

  const handleBackspace = () =>  {
    if (amt.amount.length === 1) { setAmt( prev => { return { ...prev, filled: false }}); }

    setAmt( prev => { return { ...prev, amount: amt.amount.slice(0, -1) }});
  }

  const handleWarning = () => setAmt( prev => { return { ...prev, warning: !amt.warning }});

  const handleSend = () => {
    console.log('send')
  }
  
  return (
    <div className='transfer'>
      <Warning visibility={amt.warning} handleWarning={handleWarning} />

      <div className='transfer-container py-3'>
        <h2 className='text-center'>Enter Amount</h2>

        <div className='input-container d-flex justify-content-center align-items-center'>
          <h1 className='input-currency text-end px-1'>₦</h1>
          <h1 id='output' className={`input-value px-1 ${ amt.filled ? 'filled' : null }`}>
            { amt.amount === '' ? 0 : amt.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
          </h1>
        </div>

        <h5 className='text-center my-2'>To:</h5>

        <div className='recipient d-flex justify-content-center align-items-center'>
          <span className='rec-img-container me-2'>
            <img alt='' />
          </span>
          <span className='rec-name'>K Money</span>
        </div>
      </div>

      <Keypad handleClick={handleClick} handleBackspace={handleBackspace} handleSend={handleSend} />
    </div>
  )
}

export default Transfer;
