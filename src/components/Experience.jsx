import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Syed Muhammad Ali Raza',
    duration: 'Mar 2024 - Present',
    location: 'Pakistan · On-site',
    description: [
      'Design and implement scalable folder structures and architecture from scratch',
      'Create reusable component libraries for consistent UI/UX across applications',
      'Strategically integrate third-party packages to enhance functionality while maintaining performance',
      'Use Tailwind CSS and Material UI to build responsive, modern admin interfaces',
      'Currently leading development on an Angular 16 project integrated with serverless API architecture',
      'Working on AiDevLab, an accessibility-focused platform providing report generation and video trimming solutions'
    ],
    technologies: ['React.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Ant Design']
  },
  {
    title: 'Associate Software Engineer',
    company: 'DukanLay',
    duration: 'Mar 2023 - Feb 2024',
    location: 'Lahore, Punjab, Pakistan · On-site',
    description: [
      'Spearheaded front-end development initiatives using React.js, creating intuitive and responsive user interfaces',
      'Implemented modern JavaScript/ECMAScript solutions while adhering to industry best practices',
      'Maintained robust version control workflows with Git and GitHub for efficient team collaboration',
      'Applied Object-Oriented Programming principles to develop maintainable, scalable code architectures',
      'Integrated and optimized Web Services APIs to ensure reliable data exchange',
      'Managed SQL database operations to maintain data integrity and optimize query performance'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap', 'Git', 'GitHub', 'SQL', 'REST APIs']
  },
  {
    title: 'Software Engineer Intern',
    company: 'DukanLay',
    duration: 'Dec 2022 - Mar 2023',
    location: 'Lahore, Punjab, Pakistan · On-site',
    description: 'Gained foundational experience in software development, contributing to various projects and learning industry best practices in a professional environment.'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Professional Experience</h2>
          <p>Building scalable applications and leading frontend development initiatives</p>
        </motion.div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <Briefcase className="marker-icon" />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="duration">{exp.duration}</span>
                </div>
                <div className="timeline-location">
                  <MapPin className="location-icon" />
                  <span>{exp.location}</span>
                </div>
                {Array.isArray(exp.description) ? (
                  <ul className="timeline-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="timeline-description">{exp.description}</p>
                )}
                {exp.technologies && (
                  <div className="technologies">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

