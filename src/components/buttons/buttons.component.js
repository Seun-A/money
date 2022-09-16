import './buttons.style.scss'

const Button = ({ type, label, arrow, chevron, center, doubleCircle, dis, logOut, handleLogOut }) => (
  <button
    className={`btn ${type} ${logOut ? 'logout' : null}`}
    disabled={dis}
    onClick={logOut ? handleLogOut : null}
  >
    { doubleCircle ? <span className='circle-left' /> : null}
    <div className={`main d-flex ${center ? 'justify-content-center' : 'justify-content-between'} align-items-center`}>
      <span className=''>{label}</span>
      { arrow ? <span className="material-symbols-outlined">arrow_right_alt</span> : null }
      { chevron ? <span className="material-symbols-outlined">chevron_right</span> : null }
      { logOut ? <span className="material-symbols-outlined">logout</span> : null }
    </div>
    <span className='circle-right' />
  </button>
)

export default Button;
