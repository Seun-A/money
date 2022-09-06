import './input.style.scss'

const InputHeader = ({ label }) => (
  <div className='input-header'>
    {label}
  </div>
)




const Input = ({ type, status }) => {
  const title = (type === 'email') ? 'Email Address' :
  (type === 'password') ? 'Password' : null

  const symbol = (status === 'error') ? 'close' :
  (status === 'success') ? 'check' : null

  return (
    <div className='input'>
      <div className='input-title'>{title}</div>
      <div className='input-field-container'>
      <input className='input-field' type={type} required />
      <div className={status}>
        <span className={`material-symbols-outlined`}>{symbol}</span>
      </div>
      </div>
    </div>
  )
}

const ForgotMessage = () => (
  <a className='forgot-message' href='##'>
    Forgot Password?
  </a>
)

export { Input, ForgotMessage, InputHeader }