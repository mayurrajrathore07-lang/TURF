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

function App() {
  const [selectedSlot, setSelectedSlot] = useState('');

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

  const handleAddBooking = (newBooking) => {
    setBookings((prevBookings) => [newBooking, ...prevBookings]);
  };

  return (
    <div>
      <Navbar />

      <Hero />

      <About />

      <WhyChooseUs />

      <Facilities />

      <Pricing onSelectSlot={setSelectedSlot} />

      <BookingProcess />

      <Gallery />

      <Reviews />

      <BookingForm
        selectedSlot={selectedSlot}
        onSlotChange={setSelectedSlot}
        onAddBooking={handleAddBooking}
        bookings={bookings}
      />

      <Footer />
    </div>
  );
}

export default App;
