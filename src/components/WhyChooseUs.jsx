import React from 'react';

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      image: '/crica.png',
      title: '24/7 Access',
      description: 'Play anytime you want. We are open 24 hours a day for everyone.'
    },
    {
      id: 2,
      image: '/crica.png',
      title: 'Pro Lighting',
      description: 'High quality floodlights that provide daylight visibility at night.'
    },
    {
      id: 3,
      image: '/crica.png',
      title: 'Best Grass',
      description: 'FIFA certified artificial turf for best grip, bounce and safety.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="title center-title">Why Choose Us</h2>
        <div className="services-box">
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
