import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: 'General Psychology Services', answer: 'Comprehensive psychological services including individual therapy, couples counseling, and mental health assessments.', image: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { question: 'Gender Services', answer: 'Specialized gender-affirming care including transition support, hormone therapy guidance, and mental health services.', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { question: 'Autism & ADHD Assessments', answer: 'Comprehensive neurodevelopmental assessments for Autism Spectrum Disorder and ADHD across all age groups.', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { question: 'Cognitive Assessments', answer: 'Standardized cognitive testing and academic performance evaluations for students and professionals.', image: 'https://images.unsplash.com/photo-1580894906475-403276d3942d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ];

  return (
    <div className="card">
      <div className="card__inner" style={{ backgroundColor: '#008080' }}>
        <div className="faq-container">
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => setTimeout(() => setActiveIndex(index), 150)}
                onMouseLeave={() => setTimeout(() => setActiveIndex(null), 100)}
                onClick={() => setActiveIndex(index)}
              >
                <span className="faq-text">{item.question}</span>
                <div className="faq-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-content">
            <div className={`faq-box ${activeIndex !== null ? 'active' : ''}`}>
              <p className="faq-answer">{activeIndex !== null ? faqData[activeIndex].answer : 'Hover over a service to view details'}</p>
              <img
                src={activeIndex !== null ? faqData[activeIndex].image : 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                className={`faq-image ${activeIndex !== null ? 'active' : ''}`}
                alt="FAQ"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;