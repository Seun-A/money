import './launch.style.scss'
import { LaunchLogo } from '../logos/logos.component'

const Launch = () => (
  <div id='launch' className='d-flex flex-column justify-content-center align-items-center'>
    <LaunchLogo />
    <div className='launch-text m-1'>MONEY</div>
  </div>
)

export default Launch;
