import React, { useState } from 'react';

function BookingForm({ selectedSlot, onSlotChange, onAddBooking, bookings }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setError('Please enter a valid phone number (at least 10 digits).');
      return;
    }
    if (!formData.date) {
      setError('Please choose a date for your slot.');
      return;
    }
    if (!selectedSlot) {
      setError('Please select a pricing/time slot.');
      return;
    }

    const newBooking = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      slot: selectedSlot,
    };

    onAddBooking(newBooking);
    setSuccess(true);

    setFormData({
      name: '',
      phone: '',
      date: '',
    });
    onSlotChange('');

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-box">
        <div className="contact-info">
          <h2 className="title">Contact Us</h2>
          <p className="text">Have questions? Reach out to us.</p>
          <p className="text"><strong>Phone:</strong>1234567890</p>
          <p className="text"><strong>Email:</strong> ......@turfbox.com</p>
          <p className="text"><strong>Address:</strong> 123 Sports Arena, Cricket City</p>
        </div>

        <div className="contact-form" id="booking-form">
          <h2 className="title">Book Your Turf</h2>

          {success && (
            <div className="success-message">
              🎉 Booking successful! Your turf slot is reserved.
            </div>
          )}

          {error && (
            <div style={{ color: 'red', marginBottom: '15px', fontWeight: 'bold' }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{ display: 'none' }}>Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phone" style={{ display: 'none' }}>Phone Number</label>
            <input
              type="text"
              className="input"
              placeholder="Phone Number"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="date" style={{ display: 'none' }}>Booking Date</label>
            <input
              type="date"
              className="input"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="slot" style={{ display: 'none' }}>Select a Slot</label>
            <select
              className="input"
              name="slot"
              id="slot"
              value={selectedSlot}
              onChange={(e) => onSlotChange(e.target.value)}
              required
            >
              <option value="" disabled>Select a Slot</option>
              <option value="morning">Morning Slot (6:00 AM - 4:00 PM)</option>
              <option value="evening">Evening Slot (4:00 PM - 12:00 AM)</option>
              <option value="night">Night Slot (12:00 AM - 6:00 AM)</option>
            </select>

            <button type="submit" className="button">Submit Booking</button>
          </form>

          {bookings.length > 0 && (
            <div className="booking-list-container">
              <h3 className="booking-list-title">Active Bookings ({bookings.length})</h3>
              <div>
                {bookings.map((booking) => (
                  <div key={booking.id} className="booking-item">
                    <div className="booking-item-details">
                      <span className="booking-item-name">{booking.name}</span>
                      <span className="booking-item-meta">{booking.date}</span>
                    </div>
                    <div className="booking-item-slot">{booking.slot}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
