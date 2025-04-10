import React from 'react';
import './Education.css';
import Card from './Card';

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-title-wrapper">
        <h3 className="education-h3">Education</h3>
      </div>

      <div className="education-cards">
        <Card 
          title="Master of Science in Computer Science" 
          company="Florida Atlantic University" 
          duration="August 2023 – May 2025" 
          description="Pursuing a Master's degree with a focus on software engineering, machine learning, and data structures.
            Completed several advanced courses in AI, cloud computing, and distributed systems."
                  imageUrl="/assests/fau-logo.png"
                  gpa="3.81/4.00"
        />
      </div>
    </section>
  );
}

export default Education;
