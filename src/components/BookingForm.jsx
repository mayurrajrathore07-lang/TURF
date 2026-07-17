import React, { useState } from 'react';

// BookingForm Component
// Handles user contact info, booking details, slot choice, and live slot booking feedback.
function BookingForm({ selectedSlot, onSlotChange, onAddBooking, bookings }) {
  // We use useState to keep track of the input fields in the form.
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
  });

  // State for success feedback message and validation error message
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle changes for name, phone, and date input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page
    setError('');
    setSuccess(false);

    // Simple validation rules
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

    // Create the booking object
    const newBooking = {
      id: Date.now(), // Unique ID based on time
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      slot: selectedSlot,
    };

    // Callback to add booking to global app state
    onAddBooking(newBooking);
    setSuccess(true);

    // Reset inputs
    setFormData({
      name: '',
      phone: '',
      date: '',
    });
    onSlotChange(''); // Reset slot select

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-box">
        {/* Left Side: Contact Information */}
        <div className="contact-info">
          <h2 className="title">Contact Us</h2>
          <p className="text">Have questions? Reach out to us.</p>
          <p className="text"><strong>Phone:</strong> +91 9876543210</p>
          <p className="text"><strong>Email:</strong> info@turfbox.com</p>
          <p className="text"><strong>Address:</strong> 123 Sports Avenue, Cricket City</p>
        </div>

        {/* Right Side: Interactive Booking Form */}
        <div className="contact-form" id="booking-form">
          <h2 className="title">Book Your Turf</h2>

          {/* Success message display */}
          {success && (
            <div className="success-message">
              🎉 Booking successful! Your turf slot is reserved.
            </div>
          )}

          {/* Error message display */}
          {error && (
            <div style={{ color: 'red', marginBottom: '15px', fontWeight: 'bold' }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
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

            {/* Phone Input */}
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

            {/* Date Input */}
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

            {/* Slot Dropdown Input */}
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

          {/* Dynamic Interactive Features: List of Bookings */}
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
