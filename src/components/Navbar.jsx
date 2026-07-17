import React from 'react';

// Beginner-friendly Navbar Component
// We use simple function definition and export it.
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-box">
        {/* Logo of the turf */}
        <div className="logo">Turf Box</div>
        
        {/* Navigation menu links */}
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#facilities">Facilities</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        
        {/* CTA (Call To Action) button linking directly to the booking form */}
        <a href="#booking-form" className="button">Book Now</a>
      </div>
    </nav>
  );
}

export default Navbar;
