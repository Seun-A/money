import './cards.style.scss'

import Card from '../../../components/card/card.component';
import Transaction from '../../../components/trx/trx.component';


const Cards = () => (
  <div className='cards'>
    <div className='cards-container'>
      {
        [
          {id:'1', label:' music', colorType:'apple-music-card'},
          {id:'2', label:'netflix', colorType:'netflix-card'},
          {id:'3', label:'spotify', colorType:'spotify-card'},
          {id:'4', label:' tv', colorType:'apple-tv-card'},
          {id:'5', label:'amazon', colorType:'amazon-card'},
          {id:'6', label:'spectranet', colorType:'spectranet-card'},
        ].map(({ id, ...others }) => <Card key={id} {...others} />)
      }
    </div>

    <div className='recent-transactions'>
      <h1 className='fw-bold'>Recent Transactions</h1>

      <Transaction label='N' name='Netflix' price='19,000' time='15 Jun 2020, 8:55AM' />
      <Transaction label='' name='Apple TV' price='19,000' time='15 Jun 2020, 8:55AM' />
    </div>
  </div>
)

export default Cards;
