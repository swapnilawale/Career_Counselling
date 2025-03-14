import React from 'react';

function Testimonial() {
  const testimonials = [
    { name: 'Mahe Combe', text: 'An incredible moment of relaxation.' },
    { name: 'Peckhan Tan', text: 'I received the Kalm Mind full service, a 90-minute treatment, and it was amazing.' },
    { name: 'Nicky Kung', text: 'Very good service. Super comfortable and reasonable price.' },
    { name: 'Jessica Ray', text: 'Best experience ever! The ambiance and care were unmatched.' },
    { name: 'Oliver Stone', text: 'Professional service, relaxing atmosphere, highly recommend!' },
  ];

  return (
    <div className="testimonial-container" style={{ marginBottom: 0 }}>
      <section className="testimonial-section" style={{ margin: 0, paddingBottom: 0 }}>
        <div className="reviews-container" style={{ padding: '140px 0 0 0', marginBottom: 0 }}>
          <div className="reviews-slider">
            {testimonials.map((review, index) => (
              <div key={index} className="review-card">
                <div className="quote-icon">❝</div>
                <div className="review-name">{review.name}</div>
                <div className="review-text">{review.text}</div>
              </div>
            ))}
            {testimonials.map((review, index) => (
              <div key={index + testimonials.length} className="review-card">
                <div className="quote-icon">❝</div>
                <div className="review-name">{review.name}</div>
                <div className="review-text">{review.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;