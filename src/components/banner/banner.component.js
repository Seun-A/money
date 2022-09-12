import './banner.style.scss'

const Banner = ({ shorter, profileImg }) => (
  <div className={`banner ${ shorter ? 'shorter' : null}`}>
    <div className='banner-img-container'><img src={profileImg} alt='profile-img' className='w-100 h-100 rounded-circle' /></div>
    
  </div>
)

export default Banner;
