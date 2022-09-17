import BalanceCard from '../../../components/balance-card/balance-card.component';
import Button from '../../../components/buttons/buttons.component';

const HomeSummary = () => (
  <div className='summary h-100 d-flex flex-column align-items-center justify-content-center'>
    <BalanceCard />

    <Button type='dark checkAcc' chevron label='Check your bank accounts'  />
  </div>
)

export default HomeSummary;
