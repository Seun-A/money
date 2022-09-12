import './setup.style.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SetUpForm } from '../../components/forms/forms.component';


const SetupPage = ({ state, setApp }) => {
  const fileSelect = () => document.getElementById('choose_file').click();
  const readImg = event => {
    let reader = new FileReader();
    reader.onload = e => setApp( prev => { return { ...prev, profileImg: e.target.result}} );
    reader.readAsDataURL(event.target.files[0])
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setApp( prev => { return { ...prev, [name]: value }})
  }

  let history = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    history('/home')
  }

  const changeToDate = event => event.target.type = 'date';
  const changeToText = event => !event.target.value ? event.target.type = 'text' : event.target.type = 'date';


  return (
    <div className='page setup-page'>
      <SetUpForm
        state={state}
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
