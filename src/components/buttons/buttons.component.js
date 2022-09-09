import './buttons.style.scss'

const Button = ({ type, label, arrow, center, doubleCircle, dis }) => (
  <button className={`btn ${type}`} disabled={dis}>
    { doubleCircle ? <span className='circle-left' /> : null}
    <div className={`main d-flex ${center ? 'justify-content-center' : 'justify-content-between'} align-items-center`}>
      <span className=''>{label}</span>
      { arrow ? <span className="material-symbols-outlined">arrow_right_alt</span> : null}
    </div>
    <span className='circle-right' />
  </button>
)

export default Button;
