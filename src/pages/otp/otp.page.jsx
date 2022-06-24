import './otp.style.scss'
import undraw from './otp-img.svg'
import Button from '../../components/buttons/buttons.component'
import { Link } from 'react-router-dom'



const OtpPage = ({ variation }) => (
  <div className='otp-page otp-page-1 d-flex flex-column align-items-center'>
    <img src={undraw} alt='otp-img' className='otp-img'/>
    
    <div className='otp-title'><strong>OTP Verification</strong></div>

    {
      variation === 'otp-num' ? (
        <>
          <div className='otp-info m-3 text-center'>We will send a one time password to this mobile number</div>

          <div className='otp-instruction'>Enter Mobile Number</div>
          <div className='otp-number-input m-2 bg-dange d-flex justify-content-center'>
            <div className='code bg-dange d-flex align-items-center'>+234</div>
            <input 
            className='bg-warnin'
              id='phone-number-input'
              type='tel' 
              placeholder='800 000 0000' 
              maxLength={10}
            />
          </div>
          
          <Link to='/otp-pin' className="d-flex justify-content-center">
            <Button type='sign-in' label='Get OTP' className='otp-btn'></Button>
          </Link>
        </>
      ) 
      : variation === 'otp-pin' ? (
        <>
          <div className='otp-info m-3 text-center'>Enter the OTP end to <strong>+234 800 000 0000</strong></div>

          <input className='otp-pin mt-4' type="tel" maxLength="4" placeholder={1234} />
          <div className='resend mt-4'><strong>
            <span className='text-secondary'>Didn't receive OTP? </span>
            <a className='link-primary' href='##'>Resend OTP</a>
          </strong></div>
          
          <Link to='/' className="d-flex justify-content-center">
            <Button type='sign-in' label='Verify' className='otp-btn'></Button>
          </Link>
        </>
      ) : null
    }
  </div>
)



export default OtpPage 