import React from 'react';

// Gallery Component
// Visual images representation of the cricket arena.
function Gallery() {
  // Creating an array of 6 elements to match the original layout
  const images = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    src: '/cric.png',
    alt: `Gallery turf photo ${index + 1}`
  }));

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="title center-title">Gallery</h2>
        <div className="gallery-box">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="image gallery-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
