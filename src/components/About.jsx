import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-photo">
          <img src="/assests/desktop.jpeg" alt="Madhushalini Kotti" />
        </div>
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hi, I’m Madhushalini Kotti, Results-driven Full Stack Developer with over 3 years of experience and a passion for building scalable, cloud-native applications. Currently pursuing an M.S. in Computer Science at Florida Atlantic University. Proficient in ReactJS, Node.js, Express.js, PostgreSQL, and AWS cloud services (EC2, Lambda, RDS, S3). Skilled in RESTful APIs, Docker, CI/CD, and Agile development. Proven ability to deliver secure, high-performance applications that improve user experience and operational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
