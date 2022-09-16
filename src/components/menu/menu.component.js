import Button from '../buttons/buttons.component';
import MenuItem from '../menu-item/menu-item.component';
import './menu.style.scss'

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
            { id:'1', to:'#', icon: 'monetization_on', label:'Payments' },
            { id:'2', to:'#', icon: 'sync_alt', label:'Transactions' },
            { id:'3', to:'#', icon: 'credit_card', label:'My Cards' },
            { id:'4', to:'#', icon: 'sell', label:'Promotions' },
            { id:'5', to:'#', icon: 'savings', label:'Savings' }
          ].map(({id, ...other}) => <MenuItem key={id} {...other} />)
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





