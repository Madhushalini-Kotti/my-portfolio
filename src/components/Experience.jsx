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
          title="Research Assistant" 
          company="Florida Atlantic University" 
          duration="January 2024 – Present" 
          description="Developed and maintained a TA Management System using Node.js, Express.js, and ReactJS, integrating JWT Authentication and Role-Based Access Control for managing user permissions across 10+ university departments. Created dynamic front-end components with ReactJS, utilizing Tailwind CSS and Bootstrap to enhance performance and improve user experience for 500+ users. Ensured API integrity with backend testing using Jest and Supertest, achieving 98% test coverage."
          imageUrl="/assests/fau-logo.png"
        />
        <Card 
          title="Software Development Engineer Intern" 
          company="Amazon" 
          duration="Januray 2023 – July 2023" 
          description="Designed scalable backend services with Java and Spring Boot, implementing RESTful APIs and Microservices architecture to handle over 100,000 daily product transactions. Developed admin dashboards using ReactJS and integrated with AWS RDS and CloudWatch to monitor and reduce system downtime by 30%. Ensured high code quality with JUnit and Mockito testing, and streamlined CI/CD pipelines with GitHub Actions for automated deployment."
          imageUrl="/assests/amazon-logo.png"
        />
        <Card 
          title="Software Developer" 
          company="Physics Wallah" 
          duration="Janurary 2021 – December 2022" 
          description="Developed and deployed a student portal with Node.js and MongoDB, supporting 10,000+ students, improving engagement by 25%. Led the optimization of AngularJS and Vue.js components, reducing page load time by 30% and boosting course completion rates by 20%. Engineered RESTful APIs with Node.js, enhancing data synchronization and reducing response times. Improved system security with JWT and OAuth2, increasing data protection reliability"
          imageUrl="/assests/pw-logo.png"
        />
        
      </div>
    </section>
  );
}

export default Experience;
