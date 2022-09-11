import './setup.style.scss'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cam from '../../assets/cam.svg'
import { SetUpForm } from '../../components/forms/forms.component';



const SetupPage = () => {
  const [form, setForm] = useState({ username: '', firstname: '', lastname: '', dob: '', imgUrl: cam });
  const fileSelect = () => document.getElementById('choose_file').click();

  const readImg = event => {
    let reader = new FileReader();
    reader.onload = e => setForm( prev => { return { ...prev, imgUrl: e.target.result}} );
    reader.readAsDataURL(event.target.files[0])
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setForm( prev => { return { ...prev, [name]: value }})
  }

  let history = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    history('/')
  }

  const changeToDate = event => event.target.type = 'date';
  const changeToText = event => !event.target.value ? event.target.type = 'text' : event.target.type = 'date';


  return (
    <div className='page setup-page'>
      <SetUpForm
        state={form}
        readImg={readImg}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fileSelect={fileSelect}
        changeToDate={changeToDate}
        changeToText={changeToText}
      />
    </div>
  )
}

export default SetupPage;
