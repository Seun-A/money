import './trx.style.scss';
import arrGrey from '../../assets/icons/arrow-grey.svg'
import arrLight from '../../assets/icons/arrow-light.svg'

const Transaction = ({ label, name, price, time, dark }) => (
  <div className='trx d-flex'>
    <span className='img d-flex align-items-center justify-content-center me-3'>{label}</span>

    <div className='d-flex flex-column justify-content-center flex-grow-1'>
      <span className='trx-title'>{name}</span>
      <span className='trx-time'>{time}</span>
    </div>

    <span className='trx-price d-flex align-items-center justify-content-center pe-2'>₦{price}</span>

    <div className='arr-container h-100 d-flex align-items-center justify-content-center'>
      {
        dark ? <img src={arrLight} alt='' /> : <img src={arrGrey} alt='' />
      }
    </div>
  </div>
)

export default Transaction;
