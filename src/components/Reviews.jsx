import React from 'react';

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Sharma',
      text: '"Best turf in the city! The grass quality is amazing and lights are very bright."'
    },
    {
      id: 2,
      name: 'Patel',
      text: '"Very easy booking process and friendly staff. Highly recommended for weekend matches."'
    },
    {
      id: 3,
      name: 'Gupta',
      text: '"Great facilities. Clean washrooms and enough parking space. Will visit again."'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="title center-title">Customer Reviews</h2>
        <div className="testimonials-box">
          {reviews.map((review) => (
            <div key={review.id} className="service-card">
              <p className="text">{review.text}</p>
              <h3 className="title">- {review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
