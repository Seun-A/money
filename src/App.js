import React from 'react';
import './App.css';
import LaunchPage from './pages/launch-page/launch.page';


/**HIDING AND SHOWING REACT COMPONENTS
 * import { React, useState, useEffect } from 'react';
 * 
 * Inside App(); 
 * const [ showComponent, setShowComponent ] = useState(false)
 * const [ hideComponent, setHideComponent ] = useState(true)
 * 
 * useEffect(() => {
 *   setTimeout(() => {
 *     setShowComponent(true)
 *   }, 2000);
 * })
 *   
 * useEffect(() => {
 *   setTimeout(() => {
 *     setHideComponent(false)
 *   }, 2000);
 * })
 * 
 * 
 * Inside App's return; 
 * <LaunchPage />
 * 
 * { showComponent && <WelcomePage /> }
 * { hideComponent && <LaunchPage /> }
 * 
 */


function App() {
  return (
    <div className="App">
      <LaunchPage />
    </div>
  );
}





export default App;
