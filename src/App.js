import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import cam from './assets/icons/cam.svg'
import defImg from './assets/icons/defImg.svg'

// ONBOARDING
import WelcomePage from './pages/welcome/welcome.page';
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';
import OtpPage from './pages/otp/otp.page';
import SetupPage from './pages/setup/setup.page';

// MAIN
import BasePage from './pages/base/base.page';
import HomePage from './pages/home/home.page';
import NotificationsPage from './pages/notifications/notifications.page';
import ProfilePage from './pages/profile/profile.page';

// HOME
import Summary from './pages/home/summary/summary.page';
import Cards from './pages/home/cards/cards.page';
import Savings from './pages/home/savings/savings.page';
import Transfer from './pages/home/transfer/transfer.component';


const App = () => {
  const [app, setApp] = useState({ username: '', firstname: '', lastname: '', dob: '', profileImg: cam, defImg: defImg });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* ONBOARDING */}
          <Route index element={<WelcomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/setup" element={<SetupPage state={app} setApp={setApp} />} />
          
          {/* MAIN */}
          <Route path="/home" element={<BasePage />}>
            {/* HOME */}
            <Route element={<HomePage state={app} />}>
              <Route index element={<Summary />} />
              <Route path='/home/cards' element={<Cards state={app} />} />
              <Route path='/home/savings' element={<Savings />} />
              <Route path='/home/transfer' element={<Transfer defImg={app.defImg} />} />
              <Route path='*' element={
                <div className='text-center my-5 py-5 px-2 fs-2 fw-bold'>
                  Can't find the page you're looking for...
                </div>
              } />
            </Route>

            {/* OTHER MAIN PAGES */}
            <Route path='/home/notifications' element={<NotificationsPage image={app.defImg} />} />
            <Route path='/home/profile' element={<ProfilePage state={app} setApp={setApp} />} />
          </Route>
            <Route path='*' element={ <div>Can't find the page you're looking for</div> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
