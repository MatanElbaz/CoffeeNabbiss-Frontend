import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>CANNABIS & COFFEE</h1>
      <br></br>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          onClick='/sign-up'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>

        <Button
        onClick='https://vimeo.com/496060447'
          className='btns1'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
