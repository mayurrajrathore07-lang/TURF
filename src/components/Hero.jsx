import React from 'react';
import BlurText from './BlurText';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-box">
        <div className="hero-text">
          <BlurText 
            text="Premium Box Cricket Turf" 
            className="title" 
            delay={100} 
            animateBy="words" 
            direction="top" 
          />
          <p className="text">
            Experience the best cricket turf in the city. Play day or night with
            professional lighting and high-quality artificial grass.
          </p>
          <a href="#booking-form" className="button">Book Your Slot</a>
        </div>
        
        <div className="hero-image">
          <img src="/cric.png" alt="Premium Box Cricket Turf" className="image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

