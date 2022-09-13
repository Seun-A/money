import './logos.style.css'

import colorLogo from '../../assets/logos/color-logo.png'
import strokeLogo from '../../assets/logos/stroke-logo.png'

const LaunchLogo = () => <img src={colorLogo} className='color-logo' alt='logo' />
const WelcomeLogo = () => <img src={strokeLogo} className='welcome-logo' alt='logo' />

export { LaunchLogo, WelcomeLogo };
