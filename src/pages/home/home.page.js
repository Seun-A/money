import './home.style.css'

import Banner from '../../components/banner/banner.component';
import BalanceCard from '../../components/balance-card/balance-card.component';
import Button from '../../components/buttons/buttons.component';

const HomePage = ({ state }) => (
  <div className='home-page'>
    <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <Banner profileImg={state.profileImg} />

      <BalanceCard />

      <Button type='dark checkAcc' chevron label='Check your bank accounts'  />
    </div>
  </div>
)

export default HomePage;
