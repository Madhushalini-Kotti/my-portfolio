import React from 'react';
import './Experience.css';
import Card from './Card';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-title-wrapper">
        <h3 className="experience-h3">Experience</h3>
      </div>

      <div className="experience-cards">
        <Card 
          title="Software Developer " 
          company="Florida Atlantic University" 
          duration="January 2024 – Present" 
          description="Elevated the educational experience for 73,000 students by leveraging the power of Python, Django, Celery, Django Rest Framework, and Redis to deliver seamless APIs. 
            Demonstrated strong interpersonal skills by effectively communicating and collaborating with cross-functional teams."
          imageUrl="/assests/fau-logo.png"
        />
        <Card 
          title="Software Development Engineer Intern" 
          company="Amazon" 
          duration="Januray 2023 – June 2023" 
          description="Created and deployed 10+ scalable Microservices using Java Spring Boot with object-oriented design (OOP), enhancing the modularity and maintainability of the application. 
            Spearheaded integration of privacy and security measures, collaborating with R&D, implementing JWT, OAuth, Spring Security, input validations, and rate limiting, improving system security."
          imageUrl="/assests/amazon-logo.png"
        />
        <Card 
          title="Software Engineer" 
          company="Persistent Systems" 
          duration="June 2020 – Januray 2023" 
          description="Assisted senior employees in crafting components for Spring Boot, Microservices, debugging, and implementing Spring Security to ensure robust authentication and authorization mechanisms.
            Developed an intern allocation project using Golang and React, accelerating intern-to-department assignments by 30%."
          imageUrl="/assests/amazon-logo.png"
        />
        
      </div>
    </section>
  );
}

export default Experience;
