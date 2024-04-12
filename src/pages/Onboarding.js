import React from 'react';
import logo from '../assets/img/logo.png';
import landingImg from '../assets/img/onboarding.svg';
import {useNavigate} from 'react-router-dom'

function Onboarding() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login')
  }
  return (
    <div className='onboarding'>
      <div className='page-wrapper'>
        <div className='inner-wrapper'>
          <img className='image' alt='Image' src={logo} />
          <div className='text-wrapper'>
            <div className='title'>
              Chat
              <br />
              anywhere
              <br />
              with anyone
            </div>
           <button onClick={() => handleClick()} className='btn'>Get Started</button>
          </div>
        </div>
        <img className='vector' alt='Vector' src={landingImg} />
      </div>
    </div>
  );
}

export default Onboarding;
