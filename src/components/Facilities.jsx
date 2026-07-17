import React from 'react';

function Facilities() {
  const facilityItems = [
    { id: 1, image: '/cricd.jpg', name: 'Team Dugouts' },
    { id: 2, image: '/crict.jpg', name: 'Clean Washrooms' },
    { id: 3, image: '/cricp.jpg', name: 'Free Parking' },
    { id: 4, image: '/crick.jpg', name: 'Sports Equipment' }
  ];

  return (
    <section className="facilities" id="facilities">
      <div className="container">
        <h2 className="title center-title">Turf Facilities</h2>
        <div className="facilities-box">
          {facilityItems.map((item) => (
            <div key={item.id} className="service-card facility-card">
              <img src={item.image} alt={item.name} className="image" />
              <h3 className="title">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
