import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Facilities from './components/Facilities';
import Pricing from './components/Pricing';
import BookingProcess from './components/BookingProcess';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

// App Coordinator Component
// Stores state and manages interaction between child components.
function App() {
  // State 1: selectedSlot represents the slot type clicked from the Pricing list
  const [selectedSlot, setSelectedSlot] = useState('');

  // State 2: bookings is an array holding active slot reservations.
  // We initialize it with some mock data to show how it renders immediately.
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: 'Rohan Sharma',
      phone: '9876543210',
      date: '2026-07-20',
      slot: 'evening'
    },
    {
      id: 2,
      name: 'Aditya Patel',
      phone: '9988776655',
      date: '2026-07-21',
      slot: 'morning'
    }
  ]);

  // Handler function to add a new booking to our list
  const handleAddBooking = (newBooking) => {
    setBookings((prevBookings) => [newBooking, ...prevBookings]);
  };

  return (
    <div>
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Banner/Hero section */}
      <Hero />

      {/* 3. About Turf Box */}
      <About />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Turf Facilities */}
      <Facilities />

      {/* 6. Pricing Slots with interactive select callback */}
      <Pricing onSelectSlot={setSelectedSlot} />

      {/* 7. How to Book Process */}
      <BookingProcess />

      {/* 8. Turf Photo Gallery */}
      <Gallery />

      {/* 9. Reviews / Testimonials */}
      <Reviews />

      {/* 10. Book Your Turf (Interactive Form) */}
      <BookingForm
        selectedSlot={selectedSlot}
        onSlotChange={setSelectedSlot}
        onAddBooking={handleAddBooking}
        bookings={bookings}
      />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default App;
