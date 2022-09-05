import './circles.style.scss'

const BigCircles = () => (
  <div className='circles-container big-circles'>
    <div className='circle circle-1'></div>
    <div className='circle circle-2'></div>
    <div className='circle circle-3'></div>
  </div>
)

const SmallCircles = () => (
  <div className='circles-container small-circles'>
    <div className='circle circle-1'></div>
    <div className='circle circle-2'></div>
    <div className='circle circle-3'></div>
  </div>
)

export { BigCircles, SmallCircles };
