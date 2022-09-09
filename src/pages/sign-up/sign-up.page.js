import './sign-up.style.css';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SmallCircles } from '../../components/circles/circles.component';
import WelcomeBack from "../../components/welcome-back/welcome-back.component";
import { LoginForm } from "../../components/forms/forms.component";


const SignUnPage = () => {
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
    history('/otp');
  }
  
  return (
    <div className='page sign-up-page d-flex flex-column justify-content-between'>
      <SmallCircles />
      <WelcomeBack />
    
      <LoginForm type='sign-up' handleChange={handleChange} state={form} handleSubmit={handleSubmit} />
    </div>
  )
}

export default SignUnPage;
