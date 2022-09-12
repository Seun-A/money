import './footer.style.scss'
import { Link, useLocation } from 'react-router-dom';

import wallet from '../../assets/wallet.svg'
import notifications from '../../assets/notifications.svg'
import profile from '../../assets/profile.svg'


const Footer = () => {
  const pathname = useLocation().pathname.split('/')[2]

  const [isHome, isNotif, isProfile] = [
    pathname === undefined,
    pathname === 'notifications',
    pathname === 'profile'
  ]

  return (
    <nav className='footer d-flex align-items-center justify-content-center'>
      <div className='links-container d-flex flex-row align-items-center justify-content-between'>
        {
          [
            {name: 'wallet', img: wallet, active: isHome, to: ''},
            {name: 'notifications', img: notifications, active: isNotif, to: 'notifications'},
            {name: 'profile', img: profile, active: isProfile, to: 'profile'}
          ].map((e, i) => (
            <Link key={i} to={e.to} className={`${ e.active ? 'active' : null }`} >
              <img src={e.img} alt={e.name} />
            </Link>
          ))
        }
      </div>
    </nav>
  )
}

export default Footer;
