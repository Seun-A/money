import './success.style.scss'

import check from '../../assets/icons/check.svg'
import Button from '../buttons/buttons.component';


const Success = ({ sent, value, handleAnother, handleDone, defImg }) => (
  <div className={`success-bg ${sent ? 'visible' : null }`}>
    <div className='success py-3 h-100 d-flex flex-column align-items-center justify-content-between'>
      <div className='d-flex flex-column align-items-center'>
        <div className='check-container mb-3 d-flex align-items-center justify-content-center'>
          <img src={check} alt='' />
        </div>
        <span className='px-4 text-center fs-4'>
          You have successfully sent ₦{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to
          <strong> K Money</strong>
        </span>
      </div>

      <img alt='' className='rec-img my-5' src={defImg} />

      <div className='success-bottom d-flex flex-column align-items-center'>
          <Button type='dark' doubleCircle center label='New Transaction' handleAnother={handleAnother} />
        <div className='mt-3'>
          <Button type='light' label='Done' center handleDone={handleDone} />
        </div>
      </div>
    </div>
  </div>
)

export default Success;
