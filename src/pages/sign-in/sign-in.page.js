import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SmallCircles } from '../../components/circles/circles.component'
import Form from "../../components/form/form.component";
import WelcomeBack from "../../components/welcome-back/welcome-back.component";
import './sign-in.style.scss'

const SignInPage = () => {
  const [form, setForm] = useState({ email: '', password: ''});

  const handleChange = event => {
    const { value, name } = event.target;
    name === 'email' ? 
      setForm({ email : value, password: form.password }) :
      setForm({ email : form.email, password: value })
  }
  
  let history = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    history('/otp-num');
  }
  
  return (
    <div className='page sign-in-page d-flex flex-column justify-content-between'>
      {/* BACKGROUND */}
      <SmallCircles />
      <WelcomeBack />
    
      <Form handleChange={handleChange} state={form} handleSubmit={handleSubmit} />
    </div>
  )
}

export default SignInPage;
