import './menu-item.style.css'
import { Link } from 'react-router-dom';

const MenuItem = ({ to, icon, label, active }) => (
  <Link to={to}>
    <li className={`menu-item px-2 my-2 d-flex align-items-center ${active ? 'active' : null}`}>
      <section className='px-3 d-flex align-items-center justify-content-center'>
        <span className="material-symbols-outlined">{icon}</span>
      </section>
      {label}
    </li>
  </Link>
)

export default MenuItem;
