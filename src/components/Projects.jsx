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
          title="TA Management System"
          techUsed={['React', 'Node.js', 'PostgreSQL', 'React', 'Node.js', 'PostgreSQL' ]}
          description="Built an end-to-end portal for the TA hiring process. Admins can easily view, select, and hire candidates. Automated notifications using Nodemailer. Responsive & clean UI for better user experience."
          imageUrl="https://picsum.photos/300"
          links={[
            { name: 'GitHub', url: 'https://github.com' },
            { name: 'Live Demo', url: 'https://demo.com' }
          ]}
        />

        <ProjectCard
          title="Portfolio Website"
          techUsed={['React', 'CSS']}
          description="Personal Portfolio showcasing projects & experience. Responsive design with dark/light mode. Smooth animations & transitions."
          imageUrl="/assests/portfolio.png"
          links={[
            { name: 'GitHub', url: 'https://github.com' },
            { name: 'Live Demo', url: 'https://demo.com' }
          ]}
          reverse
        />
      </div>
    </section>
  )
}

export default Projects
