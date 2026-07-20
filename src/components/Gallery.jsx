import React from 'react';
import CursorGrid from './CursorGrid';

function Gallery() {
  const images = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    src: '/cric.png',
    alt: `Gallery turf photo ${index + 1}`
  }));

  return (

    <section className="gallery" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <CursorGrid
          cellSize={70}
          color="#D946EF"
          radius={140}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={1} c
          fillOpacity={0}
          gridOpacity={0.05}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>

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
