import React from 'react';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="video-container">
        <video autoPlay muted loop id="bg-video">
          <source src={process.env.PUBLIC_URL + '/v2.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-text">
        <h1>
          Unlock Your <br /> <span>Potential</span>
        </h1>
        <p>Empowering your journey with clarity and confidence.</p>
      </div>
    </div>
  );
}

export default HeroSection;