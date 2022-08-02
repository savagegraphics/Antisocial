import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-4.mp4' autoPlay loop muted />
            <h1>HEY, I'M OLAWALE RAJI </h1>
            <p>Fullstack Web Developer</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    SEND A DM
                </Button>
                {/* <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    GIVE US JOB <i className='far fa-code' />
                </Button> */}
            </div>
        </div>
    );
}

export default HeroSection;