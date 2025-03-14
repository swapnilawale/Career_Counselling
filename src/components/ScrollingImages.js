import React, { useState, useEffect } from 'react';

function ScrollingImages() {
  const [index, setIndex] = useState(0);
  const images = [
    { src: '/images/MBTI.png', title: 'Interest Test', desc: 'Explore your interests and find your passion.', action: () => window.open('MBTI.html', '_blank') },
    { src: '/images/Gartner.png', title: 'Gartner Test', desc: 'Discover your strengths and areas for improvement.' },
    { src: '/images/Interest.png', title: 'Interest Test', desc: 'Explore your interests and find your passion.' },
    { src: '/images/IQ.png', title: 'IQ Test', desc: 'Measure your cognitive abilities and problem-solving skills.' },
  ];
  const imageHeight = 400;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Matches original 4-second interval
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="card">
      <div className="card__inner" style={{ backgroundColor: '#008080', paddingRight: '0px', borderBottom: '10px solid black' }}>
        <div className="card__content" id="another_card__content"></div>
        <div className="card__image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px', width: '600px', position: 'relative' }}>
          <div id="imageWrapper" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', position: 'absolute', top: 0, left: '50%', transform: `translateX(-50%) translateY(-${index * imageHeight}px)`, transition: 'transform 1s ease-in-out' }}>
            {images.map((img, i) => (
              <div key={i} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <div className="info-card" style={{ position: 'absolute', left: '-220px', top: '50%', transform: 'translateY(-50%)', background: 'white', borderRadius: '15px', padding: '20px', maxWidth: '300px', height: '190px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', color: '#333', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                  <h3 style={{ margin: 0, fontSize: '1.5em', color: '#008080' }}>{img.title}</h3>
                  <p style={{ margin: '10px 0' }}>{img.desc}</p>
                  <button className="start-button" onClick={img.action || (() => {})} style={{ backgroundColor: '#008080', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer', borderRadius: '10px', marginTop: '10px' }}>
                    Start Now
                  </button>
                </div>
                <img className="card___image" src={process.env.PUBLIC_URL + img.src} alt={img.title} style={{ width: 'auto', height: '400px' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingImages;