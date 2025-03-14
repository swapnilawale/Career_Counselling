import React, { useState, useRef, useEffect } from 'react';

function StepsCard() {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardPosition = cardRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsInView(cardPosition < windowHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={cardRef} className="card">
      <div className="card__inner" style={{ backgroundColor: '#FDD835', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', height: '100vh', justifyContent: 'center' }}>
        <p
          className="quote"
          style={{
            fontSize: isInView ? '40px' : '85px',
            fontWeight: 900,
            color: '#333',
            width: '80%',
            transition: 'font-size 0.5s ease, transform 1.0s ease',
            transform: isInView ? 'translateY(-50px)' : 'translateY(0)',
          }}
        >
          <strong>
            Described as <span style={{ fontWeight: 900, color: '#008080' }}>“shockingly accurate,”</span>
            we’ve helped millions of people find their ideal careers.
          </strong>
        </p>
        <div
          className="steps"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            width: '100%',
            maxWidth: '900px',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <div className="steps" style={{ flex: 1, backgroundColor: '#008080', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ fontSize: '28px', color: '#FDD835', marginBottom: '10px', fontWeight: 'bold' }}>01</h2>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px', color: '#333' }}>Assessment</h3>
            <p style={{ fontSize: '15px', color: 'white', lineHeight: 1.6 }}>Reflect upon your past experiences and future goals, and learn what makes you unique.</p>
          </div>
          <div className="steps" style={{ flex: 1, backgroundColor: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ fontSize: '28px', color: '#FDD835', marginBottom: '10px', fontWeight: 'bold' }}>02</h2>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px', color: '#333' }}>Matches</h3>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.6 }}>Find the path that's right for you based on your strengths, interests, and personality.</p>
          </div>
          <div className="steps" style={{ flex: 1, backgroundColor: '#008080', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ fontSize: '28px', color: '#FDD835', marginBottom: '10px', fontWeight: 'bold' }}>03</h2>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px', color: '#333' }}>Library</h3>
            <p style={{ fontSize: '15px', color: 'white', lineHeight: 1.6 }}>Explore over 1,000 careers and degrees. Learn who thrives in them and why.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsCard;