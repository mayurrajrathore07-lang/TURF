import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-box">
        <div className="about-image">
          <img src="/cric.png" alt="About Turf Box" className="image" />
        </div>
        
        <div className="about-text">
          <h2 className="title">About Turf Box</h2>
          <p className="text">
            We provide a premium sporting experience for cricket enthusiasts. Our
            turfs are built with top-grade materials to ensure safety and
            performance. Whether it is a friendly match or a corporate tournament,
            Turf Box is the perfect place.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
