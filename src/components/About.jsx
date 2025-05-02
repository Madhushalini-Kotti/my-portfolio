import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-photo">
          <img src="/assets/desktop.jpeg" alt="Madhushalini Kotti" />
        </div>
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hi, I’m Madhushalini Kotti — a Full Stack Developer with hands-on experience in building secure, scalable, and cloud-native applications. I recently completed my Master’s in Computer Science from Florida Atlantic University (GPA: 3.83), with internship experience at Amazon and software development work at FAU.<br /><br />

            I'm skilled in ReactJS, Node.js, Spring Boot, and PostgreSQL, and have practical exposure to AWS, Docker, and modern CI/CD pipelines. I enjoy creating clean APIs, responsive UIs, and real-time features that improve user experience and system performance.<br /><br />

            I’m actively seeking entry-level Software Developer roles — Full Stack, Frontend, Backend, or Cloud — and open to On-site, Hybrid, or Remote opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
