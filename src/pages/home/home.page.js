import './home.style.css'

import Banner from '../../components/banner/banner.component';
import Menu from '../../components/menu/menu.component';

import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'



const HomePage = ({ state }) => {
  let history = useNavigate();
  const handleLogOut = () => {
    // CLEAR LOCAL STORAGE ??
    history('/');
  }

  const [home, setHome] = useState({ showMenu: false });
  const toggleMenu = () => home.showMenu ? setHome({ showMenu: false }) : setHome({ showMenu: true })
  
  return (
    <div className='home-page'>
      <Banner state={state} toggleMenu={toggleMenu} />

      <Menu handleLogOut={ handleLogOut } state={ state } show={home.showMenu} toggleMenu={toggleMenu} />
      <Outlet />
    </div>
  )
}

export default HomePage;
