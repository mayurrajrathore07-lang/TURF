import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-box">
        <div className="hero-text">
          <h1 className="title">Premium Box Cricket Turf</h1>
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
