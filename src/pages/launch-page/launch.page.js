import { LaunchLogo } from '../../components/logos/logos.component'
import { Link } from "react-router-dom";

const LaunchPage = () => (
    <div className='launch-page'>
        <Link to="/welcome"><LaunchLogo /></Link>
    </div>
)

export default LaunchPage