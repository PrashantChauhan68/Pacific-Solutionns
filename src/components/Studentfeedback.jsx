import React from 'react';
import { Star } from 'lucide-react';

const Studentfeedback = () => {
  const testimonials = [
    {
      id: 1,
      name: "Prashant",
      feedback: "Shiwansh Solution provided me with the best guidance in front-end tools. Their real-world project approach helped me build confidence.",
      rating: 4.5
    },
    {
      id: 2,
      name: "Nishant",
      feedback: "I learned Node.js and databases from scratch. The team's support was amazing and helped me build scalable backend systems.",
      rating: 5
    },
    {
      id: 3,
      name: "Ashwin",
      feedback: "The UI/UX training was excellent. I got to work on real designs and learned Figma and design systems practically.",
      rating: 4.5
    },
    {
      id: 4,
      name: "Suman ",
      feedback: "From React to MongoDB, the full stack training was intense and rewarding. Shiwansh Solution is great for aspiring developers.",
      rating: 5
    },
    {
      id: 5,
      name: "Shanti",
      feedback: "They taught me AWS, Docker, and deployment workflows. The DevOps sessions were practical and industry-focused.",
      rating: 4.5
    },
    {
      id: 6,
      name: "Jiya",
      feedback: "I started as a beginner, but with their support, I now work on full-stack applications for a global product company.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`full-${i}`} 
          className="star-icon star-filled" 
          fill="#fbbf24" 
          stroke="#fbbf24"
        />
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="star-half">
          <Star className="star-half-bg" stroke="#d1d5db" fill="none" />
          <div className="star-half-fill">
            <Star fill="#fbbf24" stroke="#fbbf24" />
          </div>
        </div>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`empty-${i}`} 
          className="star-icon star-empty" 
          fill="none" 
          stroke="#d1d5db"
        />
      );
    }
    
    return stars;
  };

  return (
    <div className="client-feedback-section">
      {/* Header Section */}
      <div className="feedback-header">
        <h1 className="feedback-title">
          Student's Feedback
        </h1>
        <p className="feedback-subtitle">
            Start your tech journey with Shiwansh Solution — learn to communicate with the global world, build a bright future, and grow your career with our hands-on internship program.
        </p>
      </div>

      {/* Testimonials Grid - 3 Columns */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            {/* Name */}
            <h3 className="client-name">
              {testimonial.name}
            </h3>

            {/* Feedback Text */}
            <p className="feedback-text">
              {testimonial.feedback}
            </p>

            {/* Star Rating */}
            <div className="star-rating">
              {renderStars(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studentfeedback;