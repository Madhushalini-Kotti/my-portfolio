import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-title-wrapper">
        <h3 className="projects-h3">Projects</h3>
      </div>

      <div className="projects-cards">
  <ProjectCard
    title="Gym Progress Tracking System"
    techUsed={['React', 'Node.js', 'Express.js', 'MySQL', 'Docker', 'AWS EC2', 'AWS S3', 'CloudWatch']}
    description="Developed a scalable full-stack application for workout tracking and progress predictions. Containerized using Docker and deployed on AWS EC2 with high availability and performance."
    imageUrl="/assests/gym-progress.png"
    links={[
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Live Demo', url: 'https://demo.com' }
    ]}
  />

  <ProjectCard
    title="Personal Expense Tracker"
    techUsed={['React', 'PostgreSQL', 'AWS EC2', 'AWS Lambda', 'AWS S3']}
    description="Designed and developed a full-stack Personal Expense Tracker with a ReactJS front-end and PostgreSQL backend. Deployed on AWS EC2, leveraging AWS Lambda for serverless expense categorization."
    imageUrl="/assests/personal-expense.png"
    links={[
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Live Demo', url: 'https://demo.com' }
    ]}
    reverse
  />

  <ProjectCard
    title="Portfolio Website"
    techUsed={['React','HTML', 'CSS']}
    description="Personal Portfolio showcasing projects & experience. Responsive design with dark/light mode and smooth animations."
    imageUrl="/assests/portfolio.png"
    links={[
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Live Demo', url: 'https://demo.com' }
    ]}
  />
</div>


    </section>
  )
}

export default Projects
