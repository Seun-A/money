import './notifications.style.scss'

import SearchBox from '../../components/searchbox/searchbox.component';
import Notification from '../../components/notification/notification.component';

const NotificationsPage = ({ state }) => (
  <div className='home-sub-page notifications-page d-flex justify-content-center'>
    <div className='notif-container d-flex flex-column'>
      <SearchBox type='light' />

      <h1 className='fw-bold text-center mt-4 mb-3'>Notifications</h1>

      <div className='notifications overflow-scroll'>
        {
          [...Array(15).keys()].map(e => (
            <Notification
              key={e}
              from='User'
              image={state.profileImg}
              summary='sent you ₦3000'
            />
          ))
        }
      </div>
    </div>
  </div>
)

export default NotificationsPage;
