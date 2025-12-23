import React from 'react';
import '../index.css';

const InternshipBanner = () => {
  const developmentTypes = [
    
    {
      id: 1,
      title: 'Front-End Development',
      icon: '🚀'
    },
    
    {
      id: 2,
      title: 'Back-End Development',
      icon: '🛠️'
    },
    {
      id: 3,
      title: 'Full-Stack Development',
      icon: '💻'
    },
    {
      id: 4,
      title: 'DevOps',
      icon: '🗄️'
    }
  ];
  

  return (
    <div className="internship-banner">
      <div className="banner-content">
        <h1 className="banner-title">
          Kickstart Your Career with Our Software Development Internship
        </h1>
        <p className="banner-subtitle">
          Open to freshers & beginners in Front-end, Back-end, Full-stack, DevOps, and AIML. 
          Gain hands-on experience and grow your IT skills
        </p>
        <button className="apply-btn">Apply Now</button>
      </div>

      <div className="development-types">
        {developmentTypes.map((type) => (
          <div key={type.id} className="dev-card">
            <div className="dev-icon">{type.icon}</div>
            <h3 className="dev-title">{type.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default InternshipBanner;