import './exp-card.style.scss'

const ExpCard = ({ color, label, price }) => (
  <div className='exp-card-row d-flex align-items-center justify-content-center'>
    <div className={`exp-card ${color} d-flex flex-column justify-content-center p-4`}>
      <span className='fs-5'>{label}</span>
      <span className='fs-4 fw-bold'>₦{price}</span>
    </div>
  </div>
)

export default ExpCard;
