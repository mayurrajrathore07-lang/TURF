import React from 'react';

// WhyChooseUs Component
// Highlights the key advantages of Turf Box using a clean map loop to make the code neat.
function WhyChooseUs() {
  // We define an array of objects to store the service details.
  // This is a great React practice because it keeps the code DRY (Don't Repeat Yourself).
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
          {/* We loop over the features array using the javascript .map() function */}
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
