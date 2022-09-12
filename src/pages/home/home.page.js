import Banner from '../../components/banner/banner.component';
import './home.style.scss'

const HomePage = ({ state }) => (
  <div className='home-sub-page home-page'>
    <div className='h-100 d-flex align-items-center justify-content-center fw-bold fs-1'>
      Home
      <Banner profileImg={state.profileImg} />
    </div>
  </div>
)

export default HomePage;
