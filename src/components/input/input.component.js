import './input.style.scss'

const InputHeader = ({ type }) => (
    <div className='input-header'>
        {type}
    </div>
)

const Input = ({ type, status }) => {
    // CATCHING ERRORS
    const typeErr = new Error('ERROR - INVALID INPUT TYPE \nSet type to "email" or "password"')
    const statErr = new Error('ERROR - INVALID INPUT STATUS \nSet status to "success" or "error"')

    const title = (type === 'email') ? 'Email Address' :
    (type === 'password') ? 'Password' : console.log(typeErr);

    const symbol = (status === 'error') ? 'close' :
    (status === 'success') ? 'check' : console.log(statErr);

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
    <a className='forgot-message' href='/'>
        Forgot Password?
    </a>
)

export { Input, ForgotMessage, InputHeader }