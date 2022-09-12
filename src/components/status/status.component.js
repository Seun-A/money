import { Link } from 'react-router-dom';
import './status.style.scss'

const Status = ({ state }) => (
  <div className='status-container d-flex'>
    <div className='profile-img-container'>
      <img src={state.profileImg} className='w-100 h-100 rounded-circle bg-white' alt='img' />
      <div className='status-bubble' />
    </div>
    <div className='ps-3 d-flex flex-column justify-content-between'>
      <h3>
        { state.firstname ? state.firstname : <Link to='/signup' className='text-secondary'> Sign Up </Link> }
        {' '}
        { state.lastname ? state.lastname : null }
      </h3>
      <h4>{ state.firstname ? 'Online' : '...'}</h4>
    </div>
  </div>
)

export default Status;
