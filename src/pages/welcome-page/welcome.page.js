import './welcome.style.css'

import { BigCircles } from '../../components/circles/circles.component'
import Button from '../../components/buttons/buttons.component'
import WelcomeBack from '../../components/welcome-back/welcome-back.component';
import Launch from '../../components/launch/launch.component';
import React from 'react';
import { Link } from 'react-router-dom';


class WelcomePage extends React.Component {
  constructor() {
    super(); 
    this.state = { showComponent: true }
  }
  
  componentDidMount(){ 
    setTimeout(() => {this.setState({ showComponent: false })}, 2500);
  }

  render() {
    return (
      <div id='welcome-page' className='page d-flex flex-column justify-content-between'>
        {this.state.showComponent ? <Launch /> :  null }
    
        {/* Background */}
        <BigCircles />
    
        <WelcomeBack />
        
        <div className='btn-container d-flex flex-column align-items-center'>
          <Link to='/signin'><Button type='signin' /></Link>
          <Link to='/signup'><Button type='signup' /></Link>
        </div>
      </div>
    )
  }
}

export default WelcomePage;
