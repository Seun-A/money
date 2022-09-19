import './cover.style.scss'

import SearchBox from '../searchbox/searchbox.component';
import Transaction from '../trx/trx.component';

const Cover = () => (
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
)

export default Cover;
