import './home.style.css'

import Banner from '../../components/banner/banner.component';
import BalanceCard from '../../components/balance-card/balance-card.component';
import Button from '../../components/buttons/buttons.component';
import Menu from '../../components/menu/menu.component';

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



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
      <Menu handleLogOut={ handleLogOut } state={ state } show={home.showMenu} toggleMenu={toggleMenu} />

      <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
        <Banner state={state} toggleMenu={toggleMenu} />

        <BalanceCard />

        <Button type='dark checkAcc' chevron label='Check your bank accounts'  />
      </div>
    </div>
  )
}

export default HomePage;
