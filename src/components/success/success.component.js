import './success.style.scss'

import Button from '../buttons/buttons.component';
import check from '../../assets/icons/check.svg'


const Success = ({ sent, value, handleAnother, handleClose }) => (
  <div className={`success ${sent ? 'visible' : null } d-flex flex-column align-items-center justify-content-around`}>
    <div className='success-center d-flex flex-column align-items-center'>
      <div className='check-container d-flex justify-content-center align-items-center'>
        <img className='w-50' src={check} alt='' />
      </div>
      <span className='success-message mt-3 w-75 text-center'>
        You have successfully sent ₦{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to <strong>K Money</strong>
      </span>
      <img alt='' className='mt-5 rec-img' />
    </div>
    <div className='success-bottom d-flex flex-column align-items-center'>
        <Button type='dark' doubleCircle center label='Perform another transaction' onClick={handleAnother} />
      <div className='mt-4'>
        <Button type='light' label='Done' center onClick={handleClose} />
      </div>
    </div>
  </div>
)

export default Success;
