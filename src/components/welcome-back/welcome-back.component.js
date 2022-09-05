import './welcome-back.style.scss'
import { WelcomeLogo } from '../logos/logos.component'

const WelcomeBack = () => (
  <div className='welcome-back d-flex flex-column justify-content-between'>
    <WelcomeLogo />
    <div className='welcome-logo-text'>Welcome <br />Back</div>
  </div>
) 

export default WelcomeBack;
