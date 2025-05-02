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
          duration="August 2023 – April 2025" 
          description="Completed a Master’s degree in Computer Science with a focus on software engineering, machine learning, and data structures. Gained advanced knowledge through coursework in AI, cloud computing, and distributed systems."
          imageUrl="/assets/fau-logo.png"
          gpa="3.83/4.00"
        />

        <Card 
          title="Bachelor of Technology in Information Technology" 
          company="Anurag University" 
          duration="August 2019 – May 2023" 
          description="Completed coursework in data structures, web development, and database systems. Actively participated in technical fests and published academic research papers."
          imageUrl="/assets/au-logo.jpeg"
          gpa="3.7/4.00"
        />
      </div>
    </section>
  );
}

export default Education;
