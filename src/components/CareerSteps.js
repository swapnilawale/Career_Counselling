import React, { useState, useEffect } from 'react';

function CareerSteps() {
  const [progress, setProgress] = useState([0, 0, 0]);

  useEffect(() => {
    const updateProgressBars = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY || window.pageYOffset;
      const steps = document.querySelectorAll('.step');

      const newProgress = [0, 0, 0];
      steps.forEach((step, index) => {
        const stepTop = step.getBoundingClientRect().top + scrollPosition;
        const stepBottom = step.getBoundingClientRect().bottom + scrollPosition;

        if (scrollPosition + windowHeight >= stepTop + 100 && scrollPosition < stepBottom) {
          newProgress[index] = 100;
        }
      });
      setProgress(newProgress);
    };

    window.addEventListener('scroll', updateProgressBars);
    window.addEventListener('load', updateProgressBars);
    updateProgressBars(); // Initial check
    return () => {
      window.removeEventListener('scroll', updateProgressBars);
      window.removeEventListener('load', updateProgressBars);
    };
  }, []);

  return (
    <div className="card">
      <div className="card__inner" style={{ backgroundColor: '#FDD835', overflowY: 'auto', msOverflowStyle: 'none', paddingRight: '0px', borderBottom: '10px solid black' }}>
        <div className="careercontainer">
          <h1>3 Steps to Find Your Career Path</h1>
          <div className="step">
            <div className="text" style={{ textAlign: 'right' }}>
              <h2>01</h2>
              <h2>Explore Yourself</h2>
              <p>Take interactive tests to uncover your strengths, interests, and abilities.</p>
              <div className="step-progress-container">
                <div className="step-progress-bar" style={{ width: `${progress[0]}%`, transition: 'width 2.4s ease-in-out' }}></div>
              </div>
            </div>
            <div className="image" style={{ textAlign: 'left' }}>
              <img src={process.env.PUBLIC_URL + '/images/step1.png'} alt="Self Discovery" />
            </div>
          </div>
          <div className="step">
            <div className="image" style={{ textAlign: 'left' }}>
              <img src={process.env.PUBLIC_URL + '/images/step2.png'} alt="Research" />
            </div>
            <div className="text" style={{ textAlign: 'left' }}>
              <h2>02</h2>
              <h2>Unlock Insights</h2>
              <p>Our AI analyzes your responses to identify the ideal career path for you.</p>
              <div className="step-progress-container">
                <div className="step-progress-bar" style={{ width: `${progress[1]}%`, transition: 'width 2.4s ease-in-out' }}></div>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="text" style={{ textAlign: 'right' }}>
              <h2>03</h2>
              <h2>Get Your Roadmap</h2>
              <p>Receive a detailed report with personalized career guidance and recommendations.</p>
              <div className="step-progress-container">
                <div className="step-progress-bar" style={{ width: `${progress[2]}%`, transition: 'width 2.4s ease-in-out' }}></div>
              </div>
            </div>
            <div className="image" style={{ textAlign: 'right' }}>
              <img src={process.env.PUBLIC_URL + '/images/step3.png'} alt="Execution" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerSteps;