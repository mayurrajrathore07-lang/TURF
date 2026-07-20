import React from 'react';
import CursorGrid from './CursorGrid';

function Pricing({ onSelectSlot }) {
  const plans = [
    {
      id: 'morning',
      title: 'Morning Slot',
      price: 'Rs 6000 / Hour',
      time: '6:00 AM to 4:00 PM',
      isActive: false,
    },
    {
      id: 'evening',
      title: 'Evening Slot',
      price: 'Rs 12000 / Hour',
      time: '4:00 PM to 12:00 AM',
      isActive: true,
    },
    {
      id: 'night',
      title: 'Night Slot',
      price: 'Rs 10000 / Hour',
      time: '12:00 AM to 6:00 AM',
      isActive: false,
    }
  ];

  const handleBookClick = (slotId) => {
    if (onSelectSlot) {
      onSelectSlot(slotId);
    }

    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <section className="pricing" id="pricing" style={{ position: 'relative', overflow: 'hidden' }}>
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

      <div className="container">
        <h2 className="title center-title" style={{ color: "white" }}>Pricing</h2>
        <div className="pricing-box">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`service-card pricing-card ${plan.isActive ? 'pricing-card-active' : ''}`}
              onClick={() => handleBookClick(plan.id)}
            >0
              <h3 className="title">{plan.title}</h3>
              <h2 className="title price-title">{plan.price}</h2>
              <p className="text">{plan.time}</p>

              <button
                className={`button ${plan.isActive ? 'button-white' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleBookClick(plan.id);
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
