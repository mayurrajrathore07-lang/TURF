import React from 'react';

// Hero Section Component
// Introduces the premium box cricket turf with a headline, description, and slot booking button.
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-box">
        {/* Left side: Heading text and CTA button */}
        <div className="hero-text">
          <h1 className="title">Premium Box Cricket Turf</h1>
          <p className="text">
            Experience the best cricket turf in the city. Play day or night with
            professional lighting and high-quality artificial grass.
          </p>
          <a href="#booking-form" className="button">Book Your Slot</a>
        </div>
        
        {/* Right side: High quality action illustration/image */}
        <div className="hero-image">
          <img src="/cric.png" alt="Premium Box Cricket Turf" className="image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
