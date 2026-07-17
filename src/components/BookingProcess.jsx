import React from 'react';

function BookingProcess() {
  const steps = [
    {
      stepNumber: 1,
      title: 'Check Availability',
      description: 'Select your preferred date and time slot.'
    },
    {
      stepNumber: 2,
      title: 'Fill Details',
      description: 'Enter your contact information and team name.'
    },
    {
      stepNumber: 3,
      title: 'Pay Online',
      description: 'Complete the payment to confirm your booking.'
    }
  ];

  return (
    <section className="booking">
      <div className="container">
        <h2 className="title center-title">Booking Process</h2>
        <div className="booking-box">
          {steps.map((step) => (
            <div key={step.stepNumber} className="service-card booking-card">
              <div className="circle-number">{step.stepNumber}</div>
              <h3 className="title">{step.title}</h3>
              <p className="text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookingProcess;
