import React from 'react';
import BlurText from './BlurText';
import CursorGrid from './CursorGrid';

function Hero() {
  return (
    <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <CursorGrid
          cellSize={70}
          color="#D946EF"
          radius={140}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={1}
          fillOpacity={0}
          gridOpacity={0.05}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>

      <div className="container hero-box" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
        <div className="hero-text" style={{ pointerEvents: 'none' }}>
          <BlurText
            text="Premium Box Cricket Turf"
            className="title"
            delay={200}
            animateBy="words"
            direction="top"
          />

          <p className="text">
            <BlurText
              text='cricket is best'
              className="title"
              delay={200}
              animateBy="words"
              direction="top"
            />
            Experience the best cricket turf in the city. Play day or night with
            professional lighting and high-quality artificial grass.
          </p>
          <a href="#booking-form" className="button" style={{ pointerEvents: 'auto' }}>Book Your Slot</a>
          <a href="booking-form" className="button" style={{ pointerEvents: 'auto' }}></a>
        </div>

        <div className="hero-image" style={{ pointerEvents: 'none' }}>
          <img src="/cric.png" alt="Premium Box Cricket Turf" className="image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

