import './banner.style.scss'
import ham from '../../assets/icons/hamburger.svg'
import { useLocation } from 'react-router-dom';

const greeting = new Date().getHours() < 12 ? 
  "Morning" : new Date().getHours() < 18 ? 
  "Afternoon" : 
  "Evening"
;

  
const Banner = ({ state, toggleMenu }) => {
  const path = useLocation().pathname.split('/')[2];

  const [isHome, isTransfer, isCards, isSavings] = [
    path === undefined,
    path === 'transfer',
    path === 'cards',
    path === 'savings',
  ]

  return (
    <div className={`banner ${ isTransfer || isCards ? 'shorter' : null}`}>
      <img className='hamburger px-2 py-1' src={ham} alt='...' onClick={toggleMenu} />

      { isHome ?
          <div className='banner-img-container d-flex justify-content-center align-items-center'>
            <img src={state.profileImg} alt='profile-img' className='w-100 h-100 rounded-circle' /> 
          </div> 
        : null
      }
      
      {
        isHome ? 
          <div className='greeting-container'>
            <div className='banner-name mx-auto text-white'>
              Good {greeting} <br />
              {state.firstname}
            </div>
          </div> 
        : <div className='path-title text-center text-light'>{!isSavings ? path.toUpperCase() : 'SAVINGS / EXPENSES'}</div>
      }

      {
        isSavings ? 
          <div className='savings-title text-center'>
            <h4 className='fs-5 fw-normal'>Your Total Savings</h4>
            <h2 className='text-white fw-bold fs-2'>₦1,208,500</h2>
          </div>
        : null
      }
    </div>
  )
}

export default Banner;
