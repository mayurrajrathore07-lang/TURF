import React from 'react';

// About Section Component
// Details the background and history of the Turf Box cricket facilities.
function About() {
  return (
    <section className="about" id="about">
      <div className="container about-box">
        {/* About image representation */}
        <div className="about-image">
          <img src="/cric.png" alt="About Turf Box" className="image" />
        </div>
        
        {/* Description text about features and security */}
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
