import './banner.style.scss'
import ham from '../../assets/icons/hamburger.svg'

const greeting = new Date().getHours() < 12 ? 
  "Morning" : new Date().getHours() < 18 ? 
  "Afternoon" : 
  "Evening"
;

  
const Banner = ({ shorter, state, toggleMenu }) => (
  <div className={`banner ${ shorter ? 'shorter' : null}`}>
    <img className='hamburger px-2 py-1' src={ham} alt='...' onClick={toggleMenu} />

    <div className='banner-img-container d-flex justify-content-center align-items-center'>
      <img src={state.profileImg} alt='profile-img' className='w-100 h-100 rounded-circle' /> 
    </div>
    
    <div className='greeting-container'>
      <div className='banner-name mx-auto text-white'>
        Good {greeting} <br />
        {state.firstname}
      </div>
    </div>
  </div>
)

export default Banner;
