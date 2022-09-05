import './logos.style.css'

import colorLogo from '../../assets/color-logo.png'
import strokeLogo from '../../assets/stroke-logo.png'

const LaunchLogo = () => <img src={colorLogo} className='color-logo' alt='logo' />
const WelcomeLogo = () => <img src={strokeLogo} className='welcome-logo' alt='logo' />

export { LaunchLogo, WelcomeLogo };
