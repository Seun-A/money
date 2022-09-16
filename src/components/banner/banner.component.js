import './banner.style.scss'

const greeting = new Date().getHours() < 12 ? 
  "Morning" : new Date().getHours() < 18 ? 
  "Afternoon" : 
  "Evening";

  
const Banner = ({ shorter, profileImg }) => (
  <div className={`banner ${ shorter ? 'shorter' : null}`}>
    <div className='banner-img-container d-flex justify-content-center align-items-center'>
      <img src={profileImg} alt='profile-img' className='w-100 h-100 rounded-circle' /> 
    </div>
    <div className='greeting-container'>
      <div className='banner-name mx-auto text-white'>
        Good {greeting} <br />
        Seun
      </div>
    </div>
  </div>
)

export default Banner;
