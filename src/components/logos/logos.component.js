import './logos.style.scss'
import colorLogo from './color-logo.png'
import strokeLogo from './stroke-logo.png'


const LaunchLogo = () => (
    <div className='launch-logo-container'>
        <img src={colorLogo} className='color-logo' alt='logo' />
        <div className='launch-logo-text'>MONEY</div>
    </div>
)

const WelcomeLogo = () => (
    <div className='welcome-logo-container'>
        <img src={strokeLogo} className='welcome-logo' alt='logo' />
        <div className='welcome-logo-text'>Welcome Back</div>
    </div>
)

export { LaunchLogo, WelcomeLogo }