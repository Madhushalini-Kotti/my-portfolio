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
            Hi, I’m Madhushalini Kotti, a Full Stack Developer currently pursuing my Master’s in Computer Science at Florida Atlantic University (GPA: 3.81). I’ve contributed to impactful projects at Amazon and FAU, focusing on scalable, cloud-native solutions. <br /> 

Skilled in ReactJS, Node.js, Spring Boot, and PostgreSQL, I build secure, high-performance applications using AWS, Docker, and modern CI/CD pipelines. I enjoy crafting clean APIs, responsive interfaces, and real-time features that improve user experience and system efficiency.<br />

            I'm open to Software Developer roles, including Full Stack, Frontend, Backend, and Cloud Engineering — available for On-site, Hybrid, or Remote opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
