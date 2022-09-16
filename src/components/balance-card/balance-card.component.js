import './balance-card.style.scss'

import chart from '../../assets/undraw/chart.svg'

const BalanceCard = () => (
  <div className='balance-card bg-white'>
    <div className='bal-top mx-auto'>
      <div className='d-flex'>
        <h2 className='bal-top-title flex-grow-1 m-0 d-flex align-items-center'>Your Balance is</h2>
        <div className='bal-btn-contianer d-flex justify-content-center align-items-center px-2'>
          <button className='m-0'>⋯</button>
        </div>
      </div>
      <h1 className='bal-top-value m-0 py-2'>
        #50,000,000
      </h1>
    </div>

    <div className='bal-chart-container d-flex justify-content-center align-items-center mt-3'>
      <img src={chart} alt='chart' />
    </div>
  </div>
)

export default BalanceCard;
