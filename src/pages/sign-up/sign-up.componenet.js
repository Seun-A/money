import { Link } from "react-router-dom";

import Button from '../../components/buttons/buttons.component'
import { SmallCircles } from '../../components/circles/circles.component'
import { Input, InputHeader } from '../../components/input/input.component'
import { WelcomeLogo } from '../../components/logos/logos.component'

const SignUpPage = () => (
    <div className='sign-page'>
        {/* BACKGROUND */}
        <SmallCircles />

        <Link to="/"><WelcomeLogo /></Link>

        <div className='form'>
            <InputHeader type='Sign Up' />
            <Input type='email' status='error' />
        </div>

        <Button type='signup' />
    </div>
)

export default SignUpPage