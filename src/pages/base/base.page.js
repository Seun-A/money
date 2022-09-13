import './base.style.css';
import { Outlet } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';

const BasePage = () => (
  <div className='base-page'>      
    <Footer />
    <Outlet />
  </div>
)

export default BasePage;
