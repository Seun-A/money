import './welcome.style.scss'
import { Link } from "react-router-dom";

import { BigCircles } from '../../components/circles/circles.component'
import { WelcomeLogo } from '../../components/logos/logos.component'
import Button from '../../components/buttons/buttons.component'

const WelcomePage = () => (
    <div className='welcome'>
        {/* Background */}
        <BigCircles />

        <Link to="/"><WelcomeLogo /></Link>
        
        <div className='btn-container'>            
            <Link to="/signin"><Button type='signin' /></Link>
            <Link to="/signup"><Button type='signup' /></Link>
        </div>
    </div>
)

export default WelcomePage