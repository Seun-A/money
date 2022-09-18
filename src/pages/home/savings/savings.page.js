import SearchBox from '../../../components/searchbox/searchbox.component';
import Transaction from '../../../components/trx/trx.component';
import './savings.style.scss'

const HomeSavings = () => (
  <div className='savings-page'> 
    <div className='back'>
      <h1 className='m-0 d-flex justify-content-center align-items-center fs-2 fw-bold text-center'>Track Your Expenses</h1>

      <div className='exp-card-container mx-auto'>
        <section className='d-flex align-items-center justify-content-center h-50'>
          <div className='exp-card-row d-flex align-items-center justify-content-center'>
            <div className='exp-card red d-flex flex-column justify-content-center p-4'>
              <span className='fs-5'>Travel</span>
              <span className='fs-4 fw-bold'>₦9,000</span>
            </div>
          </div>
          <div className='exp-card-row d-flex align-items-center justify-content-center'>
            <div className='exp-card yellow d-flex flex-column justify-content-center p-4'>
              <span className='fs-5'>Travel</span>
              <span className='fs-4 fw-bold'>₦9,000</span>
            </div>
          </div>
        </section>

        <section className='d-flex align-items-center justify-content-center h-50'>
          <div className='exp-card-row d-flex align-items-center justify-content-center'>
            <div className='exp-card blue d-flex flex-column justify-content-center p-4'>
              <span className='fs-5'>Travel</span>
              <span className='fs-4 fw-bold'>₦9,000</span>
            </div>
          </div>
          <div className='exp-card-row d-flex align-items-center justify-content-center'>
            <div className='exp-card purple d-flex flex-column justify-content-center p-4'>
              <span className='fs-5'>Travel</span>
              <span className='fs-4 fw-bold'>₦9,000</span>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div className='cover'>
      <div className='cover-content'>
        <div className='handle-container p-2'>
          <div className='handle' />
        </div>

        <SearchBox type='dark' />

        <div className='trx-container px-5'>
          <Transaction dark label='N' name='Netflix' price='19,000' time='15 Jun 2020, 8:55AM' />
          <Transaction dark label='' name='Apple TV' price='19,000' time='15 Jun 2020, 8:55AM' />
        </div>
      </div>
    </div>
  </div>
)

export default HomeSavings;
