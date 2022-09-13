import './profile.style.scss'
import { useNavigate } from 'react-router-dom'

import Status from '../../components/status/status.component'
import { ProfileForm } from '../../components/forms/forms.component'
import Button from '../../components/buttons/buttons.component'

import purple from '../../assets/bg-items/purple.svg'
import blue from '../../assets/bg-items/blue.svg'


const ProfilePage = ({ state, setApp }) => {
  let history = useNavigate();
  const handleSignOut = () => {
    // CLEAR LOCAL STORAGE ??
    history('/');
  }

  return (
    <div className='profile-page d-flex justify-content-center'>
      <img src={purple} className='color-bg purple-bg' alt='bg' />
      <img src={blue} className='color-bg blue-bg' alt='bg' />

      <div className='profile-container'>
        <h1>Profile</h1>

        <Status state={state} />
        
        <ProfileForm state={state} setApp={setApp} />

        <div className='text-center'>
          <Button type='light' arrow label='Log Out' signOut handleSignOut={handleSignOut} />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
