import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
  BrowserRouter, 
  Routes,
  Route 
} from "react-router-dom";
import App from './App';
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.componenet';
import WelcomePage from './pages/welcome-page/welcome.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

