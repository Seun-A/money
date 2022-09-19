import Cover from '../../../components/cover/cover.component';
import ExpCard from '../../../components/exp-card/exp-card.component';

import './savings.style.scss'

const Savings = () => (
  <div className='savings-page'> 
    <div className='back'>
      <h1 className='m-0 d-flex justify-content-center align-items-center fs-2 fw-bold text-center'>Track Your Expenses</h1>

      <div className='exp-card-container mx-auto'>
        <section className='d-flex align-items-center justify-content-center h-50'>
          <ExpCard color='red' label='Travel' price='9,000' />
          <ExpCard color='yellow' label='Shopping' price='4,000' />
        </section>

        <section className='d-flex align-items-center justify-content-center h-50'>
          <ExpCard color='blue' label='Sport' price='2,000' />
          <ExpCard color='purple' label='Medicine' price='7,000' />
        </section>
      </div>
    </div>

    <Cover />
  </div>
)

export default Savings;
