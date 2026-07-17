import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-box">
        <div className="logo">Turf Box</div>

        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#facilities">Facilities</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#booking-form" className="button">Book Now</a>
      </div>
    </nav>
  );
}

export default Navbar;
