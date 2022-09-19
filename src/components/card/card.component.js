import './card.style.scss';
import mastercard from '../../assets/icons/mastercard.svg';

const Card = ({ colorType, label }) => (
  <section className='card'>
    {/* CARD FRONT */}
    <div className={`card-front card-part ${colorType}`}>
      <div className='card-top d-flex'>
        <span className='card-bal'>₦50,000,000</span>

        <span className='card-logo'>{label}</span>
      </div>

      <span className='card_number'>**** **** **** { Math.floor(Math.random(4)* (9999 - 1000 + 1) + 1000) }</span>
      <div className='card-bottom d-flex'>

        <div className='card-bottom-left d-flex flex-column flex-grow-1'>
          <div>
            <span className='card-label'>Exp. End:</span>
              <span className='card-info'>10/25</span>
          </div>
          <span className='card-info'>Ajayi Oluwaseunfunmi C.</span>
        </div>
        <div className='card-bottom-right d-flex justify-content-center align-items-center'>
          <img src={mastercard} alt='' />
        </div>
      </div>
    </div>

    {/* CARD BACK */}
    <div className={`card-back card-part ${colorType}`}>
      <div className='card-black-line' />

      <div className='card-back-content'>
        <div className='card-secret'>
          <p className='card-secret-pin'>{ Math.floor(Math.random(4)* (999 - 100 + 1) + 100) }</p>
        </div>
        
        <p className='card-message'>
          This card was issued under the license of MasterCard Inc. in Purchase, New York. <br />
          If found, please return to the nearest commercial bank.
        </p>
      </div>
    </div>
  </section>
)

export default Card;
