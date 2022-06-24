import { Link } from "react-router-dom";

import Button from '../../components/buttons/buttons.component'
import { SmallCircles } from '../../components/circles/circles.component'
import { ForgotMessage, Input, InputHeader } from '../../components/input/input.component'
import { WelcomeLogo } from '../../components/logos/logos.component'
import './sign-in.style.scss'

const SignInPage = () => (
    <div className='sign-page'>
        {/* BACKGROUND */}
        <SmallCircles />

        <Link to="/"><WelcomeLogo /></Link>

        <div className='form'>
            <InputHeader type='Sign In' />
            <Input type='email' status='error' />
            <Input type='password' status='error' />
            <ForgotMessage />
        </div>

            <Link to='/otp-num' className="d-flex justify-content-center">
                <Button type='signin' />
            </Link>
    </div>
)

export default SignInPage