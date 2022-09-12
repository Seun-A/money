import './forms.style.scss'

import FormInput from '../form-input/form-input.component';
import Button from '../buttons/buttons.component';

import tick from '../../assets/tick.svg'


/** LOGIN **/
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



/** OTP **/
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
          { [0, 1, 2, 3].map(e => <input key={e} type='tel' maxLength={1} required /> ) }
          </div>

          <h4 className='fw-bold mt-4'>Didn't receive OTP? <a href='##'>Resend OTP</a></h4>
        </div>
        
        <Button type='dark' label='Verify' dis={state.dis} center doubleCircle />
      </form>
    )}
  </div>
)


/** SETUP **/
const tickImg = <span className='d-flex'>Complete <img src={tick} alt='tick' className='ps-2' /></span> 

const SetUpForm = ({ state, handleChange, handleSubmit, fileSelect, changeToDate, changeToText, readImg }) => (
  <form className='setup-form' onSubmit={handleSubmit}>
    <div className='img-container d-flex justify-content-center align-items-center'>
      <div className='img-input d-flex justify-content-center align-items-center' onClick={fileSelect}>
        <input type="file" id="choose_file" className='d-none' onChange={readImg} />
        <img src={state.profileImg} alt='insert' className='w-100' id='profile-img' />
      </div>
      <span className='img-bg img-bg-1' />
      <span className='img-bg img-bg-2' />
    </div>

    {
      [
        ['username', 'Username', state['username'], 'username'],
        ['firstname', 'First Name', state['firstname'], 'username'],
        ['lastname', 'Last Name', state['lastname'], 'username'],
        ['dob', 'Date Of Birth', state['dob'], 'username']
      ]
      .map((e, i) => (
        <FormInput
          key={i}
          name={e[0]}
          type='text'
          label={e[1]}
          value={e[2]}
          onChange={handleChange}
          autoComplete={e[3]}
          required

          onFocus={ e[0] === 'dob' ? changeToDate : null }
          onBlur={ e[0] === 'dob' ? changeToText : null }
        />
      ))
    }


    <div className='btn-container d-flex justify-content-center align-items-center mt-3'>
      <Button type='light' label={tickImg} center />
    </div>
  </form>
)


/** PROFILE **/
const ProfileForm = ({ state, setApp }) => (
  <form className='profile-form'>
    {
      [
        ['username', 'Username', state['username'], 'username'],
        ['firstname', 'First Name', state['firstname'], 'username'],
        ['lastname', 'Last Name', state['lastname'], 'username'],
        ['dob', 'Date Of Birth', state['dob'], 'username']
      ]
      .map((e, i) => (
        <FormInput
          key={i}
          name={e[0]}
          type='text'
          label={e[1]}
          value={e[2] ? e[2] : '...'}
          autoComplete={e[3]}
          disabled    
        />
      ))
    }
  </form>
)

export { LoginForm, OtpForm, SetUpForm, ProfileForm };
