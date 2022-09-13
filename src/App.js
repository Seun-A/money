import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import WelcomePage from './pages/welcome/welcome.page';
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';
import OtpPage from './pages/otp/otp.page';
import SetupPage from './pages/setup/setup.component';

import BasePage from './pages/base/base.page';
import HomePage from './pages/home/home.page';
import NotificationsPage from './pages/notifications/notifications.page';
import ProfilePage from './pages/profile/profile.page';

import cam from './assets/icons/cam.svg'


const App = () => {
  const [app, setApp] = useState({ username: '', firstname: '', lastname: '', dob: '', profileImg: cam });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/setup" element={<SetupPage state={app} setApp={setApp} />} />
          <Route path="/home" element={<BasePage />}>
            <Route index element={<HomePage state={app} />} />
            <Route path='/home/notifications' element={<NotificationsPage state={app} />} />
            <Route path='/home/profile' element={<ProfilePage state={app} setApp={setApp} />} />
          </Route>
            <Route path='*' element={
              <div>Can't find the page you're looking for</div>
            } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
