import './otp.style.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import undraw from './otp-img.svg'
import { OtpForm } from '../../components/forms/forms.component'


const OtpPage = () => {
  const [form, setForm] = useState({ num: '', numValue: '', sentOTP: false, dis: true });

  const handleNumChange = event => setForm( prevForm => {return { ...prevForm, num: event.target.value }});

  const handleOTPChange = event => {
    const inputs = document.querySelectorAll(".otp-container input");

    inputs.forEach((input, index) => {
      if (index !== 0) { input.addEventListener("click", () => inputs[0].focus()) }

      input.addEventListener("keyup", () => {
        input.style.borderColor = '#2743FD';
        if (input.value && index !== 3) { inputs[index + 1].focus(); }
        else { setForm( prevForm => { return { ...prevForm, dis: false }}); }
      });
    });
  }
  

  const handleNumSubmit = event => {
    event.preventDefault();
    setForm( prevForm => { return { 
      ...prevForm,
      numValue: `+234 ${form.num.substring(0, 3)} ${form.num.substring(3, 6)} ${form.num.substring(6, 10)}`, 
      sentOTP: true,
    }});
  }

  let history = useNavigate();

  const handleOTPSubmit = event => {
    event.preventDefault();
    history('/')
  }


  return (
    <div className='otp-page otp-page-1 d-flex flex-column align-items-center'>
      <img src={undraw} alt='otp-img' className='otp-img'/>

      <h1 className='fw-bold'>OTP Verification</h1>
        {
          form.sentOTP ? (
            <h3 className='mt-3 mb-4 text-center'>Enter the OTP sent to <strong>{form.numValue}</strong></h3>
          )
          : <h3 className='mt-3 mb-4 text-center'>We will send a one time password to this mobile number</h3>
        }

      <OtpForm 
        state={form}
        handleChange1={handleNumChange}
        handleChange2={handleOTPChange}         
        handleSubmit1={handleNumSubmit}
        handleSubmit2={handleOTPSubmit}
      />
    </div>
  )
}

export default OtpPage;
