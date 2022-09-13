import './notification.style.scss'

import arrow from '../../assets/icons/arrow.svg'

const Notification = ({ image, from, summary }) => (
  <div className='notification d-flex'>
    <div className='notif-img-container d-flex justify-content-center align-items-center p-1'>
      <img src={image} alt='img' className='w-100 h-100 rounded-circle bg-white' />
    </div>

    <div className='notif-main ps-2 d-flex flex-column justify-content-center'>
      <span className='notif-title'>{from}</span>
      <span className='narration'>{from} {summary}</span> 
    </div>

    <div className='notif-arrow d-flex align-items-center justify-content-center h-100'>
      <img src={arrow} alt='arr' />
    </div>
  </div>
)
export default Notification;
