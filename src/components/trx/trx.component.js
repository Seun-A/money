import './trx.style.scss';
import arr from '../../assets/icons/arrow.svg'

const Transaction = ({ label, name, price, time }) => (
  <div className='trx d-flex'>
    <span className='img d-flex align-items-center justify-content-center me-3'>{label}</span>

    <div className='d-flex flex-column flex-grow-1'>
      <span className='trx-title'>{name}</span>
      <span className='trx-time'>{time}</span>
    </div>

    <span className='trx-price d-flex align-items-center justify-content-center pe-2'>₦{price}</span>

    <div className='arr-container d-flex align-items-center justify-content-center'>
      <img src={arr} alt='' />
    </div>
  </div>
)

export default Transaction;
