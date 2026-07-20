import React from 'react';
import CursorGrid from './CursorGrid';

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      image: '/eee.jpg',
      title: '24/7 Access',
      description: 'Play anytime you want. We are open 24 hours a day for everyone.'
    },
    {
      id: 2,
      image: '/light.webp',
      title: 'Pro Lighting',
      description: 'High quality floodlights that provide daylight visibility at night.'
    },
    {
      id: 3,
      image: '/pitch.jpg',
      title: 'Best Grass',
      description: 'FIFA certified artificial turf for best grip, bounce and safety.'
    }
  ];

  return (
    <section className="services" style={{ position: 'relative', overflow: 'hidden' }}>
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

      <div className="container" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
        <h2 className="title center-title white-text">Why Choose Us</h2>
        <div className="services-box" style={{ pointerEvents: 'auto' }}>
          {features.map((feature) => (
            <div key={feature.id} className="service-card">
              <img src={feature.image} alt={feature.title} className="image" />
              <h3 className="title">{feature.title}</h3>
              <p className="text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
