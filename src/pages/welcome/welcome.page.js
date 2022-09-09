import './welcome.style.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Launch from '../../components/launch/launch.component';
import { BigCircles } from '../../components/circles/circles.component';
import WelcomeBack from '../../components/welcome-back/welcome-back.component';
import Button from '../../components/buttons/buttons.component';


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
          <Link to='/signin'><Button type='dark' label='Sign In' arrow /></Link>
          <Link to='/signup'><Button type='light' label='Sign Up' arrow /></Link>
        </div>
      </div>
    )
  }
}

export default WelcomePage;
