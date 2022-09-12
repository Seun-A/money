import './base.style.scss';
import { Outlet } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';

const BasePage = ({ state, setApp }) => {

  return (
    <div className='base-page'>      
      <Footer />
      <Outlet />
    </div>
  )
}

export default BasePage;
