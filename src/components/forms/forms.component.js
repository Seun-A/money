import './forms.style.scss'
import FormInput from '../form-input/form-input.component';
import Button from '../buttons/buttons.component';

const LoginForm = ({ state, type, handleChange, handleSubmit }) => (
  <form 
    onSubmit={handleSubmit}
    className='sign-up-in-form d-flex flex-column justify-content-between align-items-center align-self-center' 
  >
    <section>
      <h1 className='fw-bold'>
        { type === 'sign-in' ? 'Sign In' : 'Sign Up' }
      </h1>

      <FormInput 
        name='email'
        type='email'
        label='Email Address'
        value={state['email']}
        onChange= {handleChange}
        autoComplete = 'email'
        required
      />

      <FormInput 
        name='password'
        type='password'
        label='Password'
        value={state['password']}
        onChange= {handleChange}
        autoComplete = 'password'
        required
      />

      { type === 'sign-in' ? <a className='forgot d-block pt-4' href='##'>Forgot Password?</a> : null }
    </section>

    <Button type='dark' arrow 
      label={ type === 'sign-in' ? 'Sign In' : 'Sign Up'}
    />
  </form>
)



const OtpForm = ({ state, handleChange1, handleChange2, handleSubmit1, handleSubmit2 }) => (
  <div className='otp-form d-flex flex-column align-items-center'>

    { !state.sentOTP ? (
      <form onChange={handleChange1} onSubmit={handleSubmit1} className='d-flex flex-column'>
        <div className='box'>
          <h4 className='text-center'>Enter Mobile Number</h4>
          <div className='number-container m-2 d-flex justify-content-center'>
            <div className='tel d-flex align-items-center'>+234</div>
            <input 
              id='phone-number-input'
              type='tel'
              placeholder='800 000 0000'
              maxLength={10}
              pattern="[0-9]+"
              required
            />
          </div>
        </div>
        
        <Button type='dark' label='Get OTP' center doubleCircle />
      </form>
    ) : (
      <form onChange={handleChange2} onSubmit={handleSubmit2} className='d-flex flex-column align-items-center'>
        <div className='box'>
          <div className='otp-container d-flex mt-3 mb-2'>
          { [1, 2, 3, 4].map((e, i) => <input key={i} type='tel' maxLength={1} /> ) }
          </div>

          <h4 className='fw-bold mt-4'>Didn't receive OTP? <a href='##'>Resend OTP</a></h4>
        </div>
        
        <Button type='dark' label='Verify' dis={state.dis} center doubleCircle />
      </form>
    )}
  </div>
)

export { LoginForm, OtpForm };
