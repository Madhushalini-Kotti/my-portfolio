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
            Hi, I’m Madhushalini Kotti, a passionate Full Stack Developer. I love building scalable and efficient systems. I have experience in developing backend APIs, full stack applications, and contributing to AI projects. My skillset includes Java, Python, JavaScript, React, Next.js, Spring Boot, Django, and the list goes on. I thrive in solving complex problems and improving system performance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
