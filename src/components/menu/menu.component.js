import './menu.style.scss'

import MenuItem from '../menu-item/menu-item.component';
import Button from '../buttons/buttons.component';


const Menu = ({ handleLogOut, state, show, toggleMenu }) => (
  <div className={`menu-container ${show ? 'show' : null}`}>
    <div className='menu d-flex flex-column'>
      <div onClick={toggleMenu} className='close-menu material-symbols-outlined'>close</div>

      {/* Status */}
      <div className='menu-status d-flex align-items-center'>
        <div className='menu-status-container d-flex align-items-center w-100 pe-2'>
          <div className='menu-img-container'>
            <img src={state.profileImg} className='w-100 h-100' alt='a' />
          </div>
          <div className='ps-3'>
            <h3 className='m-0'>{state.firstname} {state.lastname}</h3>
            <h4 className='m-0'>{state.username}</h4>
          </div>
        </div>
      </div>


      {/* Menu List */}
      <ul className='menu-items'> 
        {
          [
            { id:'1', to:'/home', icon: 'account_balance', label:'Home' },
            { id:'2', to:'/home/transfer', icon: 'sync_alt', label:'Transfer' },
            { id:'3', to:'/home/cards', icon: 'credit_card', label:'My Cards' },
            { id:'5', to:'/home/savings', icon: 'savings', label:'Savings / Expenses' }
          ].map(({id, ...other}) => <MenuItem key={id} {...other} handleClick={toggleMenu} />)
        }
      </ul>

      {/* Logout */}
      <div className='menu-btn-container d-flex align-items-center justify-content-center'>
        <Button type='light' label='Log Out' logOut handleLogOut={handleLogOut} />
      </div>
    </div>
  </div>
)

export default Menu;
