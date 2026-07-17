import React from 'react';

// Pricing Section Component
// Displays pricing models. Includes interactive capability: selecting a package pre-selects the dropdown in the Booking Form.
function Pricing({ onSelectSlot }) {
  const plans = [
    {
      id: 'morning',
      title: 'Morning Slot',
      price: 'Rs 800 / Hour',
      time: '6:00 AM to 4:00 PM',
      isActive: false,
    },
    {
      id: 'evening',
      title: 'Evening Slot',
      price: 'Rs 1200 / Hour',
      time: '4:00 PM to 12:00 AM',
      isActive: true, // Highlights the popular evening slot
    },
    {
      id: 'night',
      title: 'Night Slot',
      price: 'Rs 1000 / Hour',
      time: '12:00 AM to 6:00 AM',
      isActive: false,
    }
  ];

  const handleBookClick = (slotId) => {
    // Pass selection up to App component
    if (onSelectSlot) {
      onSelectSlot(slotId);
    }
    
    // Smooth scroll to the booking form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="title center-title">Pricing</h2>
        <div className="pricing-box">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`service-card pricing-card ${plan.isActive ? 'pricing-card-active' : ''}`}
              onClick={() => handleBookClick(plan.id)}
            >
              <h3 className="title">{plan.title}</h3>
              <h2 className="title price-title">{plan.price}</h2>
              <p className="text">{plan.time}</p>
              
              <button 
                className={`button ${plan.isActive ? 'button-white' : ''}`}
                onClick={(e) => {
                  e.stopPropagation(); // Avoid double execution if card itself is clicked
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
