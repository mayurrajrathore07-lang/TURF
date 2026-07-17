import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-box">
        <div className="logo">Turf Box</div>
        <p className="text">Premium Box Cricket Experience</p>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#facilities">Facilities</a>
          <a href="#pricing">Pricing</a>
        </div>
        
        <p className="text">© {new Date().getFullYear()} Turf Box. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
