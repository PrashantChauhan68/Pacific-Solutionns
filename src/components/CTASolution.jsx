import React from 'react';
import { ArrowRight } from 'lucide-react';
import "../index.css";

const CTAConsultation = () => {
  return (
    <section className="cta-banner">
      <div className="cta-circle-1"></div>
      <div className="cta-circle-2"></div>
      
      <div className="cta-wrapper">
        <div className="cta-text">
          <h2 className="cta-heading">Ready to transform your business?</h2>
          <p className="cta-description">
            Let's discuss how we can help you achieve your digital goals.
          </p>
        </div>

        <div>
          <button className="cta-btn">
            Get Free Consultation
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTAConsultation;