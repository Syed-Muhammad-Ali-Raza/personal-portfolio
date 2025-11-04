import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const projects = [
  {
    title: 'iKnow',
    description: 'A student awareness platform built with React.js, designed to educate and inform students in the US about various important topics and resources.',
    highlights: [
      { icon: '🎓', text: 'Student awareness and education platform' },
      { icon: '🇺🇸', text: 'Focused on US student community' },
      { icon: '📚', text: 'Educational content management' }
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    duration: 'Current Project',
    company: 'AiDevLab',
    featured: true
  },
  {
    title: 'Umaadex',
    description: 'A comprehensive file and document management system that allows users to upload, organize, and manage their documents efficiently.',
    highlights: [
      { icon: '📁', text: 'File and document management' },
      { icon: '☁️', text: 'Cloud-based storage solution' },
      { icon: '🔍', text: 'Advanced search and organization' }
    ],
    technologies: ['React.js', 'Material UI', 'JavaScript', 'CSS3'],
    duration: 'Current Project',
    company: 'Senarios'
  },
  {
    title: 'Xperi',
    description: 'An innovative platform developed under AiDevLab partnership, focusing on experimental features and cutting-edge technology implementations.',
    highlights: [
      { icon: '🧪', text: 'Experimental technology platform' },
      { icon: '⚡', text: 'Cutting-edge implementations' },
      { icon: '🔬', text: 'Research and development focus' }
    ],
    technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5'],
    duration: 'Current Project',
    company: 'AiDevLab'
  },
  {
    title: 'Serverless',
    description: 'A serverless architecture project demonstrating modern cloud computing patterns and serverless application development.',
    highlights: [
      { icon: '☁️', text: 'Serverless architecture implementation' },
      { icon: '⚡', text: 'Auto-scaling and cost optimization' },
      { icon: '🔧', text: 'Microservices architecture' }
    ],
    technologies: ['Angular', 'Material UI', 'TypeScript', 'CSS3'],
    duration: 'Current Project',
    company: 'Senarios'
  },
  {
    title: 'NumberHive',
    description: 'A dynamic website that displays content managed through the NumberBarn admin panel. When content is added or updated in NumberBarn, it automatically reflects on NumberHive.',
    highlights: [
      { icon: '🔄', text: 'Dynamic content management' },
      { icon: '⚡', text: 'Real-time content updates' },
      { icon: '🎯', text: 'Admin panel integration' }
    ],
    technologies: ['Angular', 'Material UI', 'TypeScript', 'CSS3'],
    duration: 'Current Project',
    company: 'Senarios'
  },
  {
    title: 'NumberBarn Admin Panel',
    description: 'A comprehensive admin panel for managing NumberHive content. Administrators can add, edit, and update content that automatically reflects on the NumberHive dynamic website.',
    highlights: [
      { icon: '👨‍💼', text: 'Content management system' },
      { icon: '🔄', text: 'Real-time content synchronization' },
      { icon: '🎛️', text: 'Admin dashboard functionality' }
    ],
    technologies: ['Angular', 'Material UI', 'TypeScript', 'CSS3'],
    duration: 'Current Project',
    company: 'Senarios'
  },
  {
    title: 'Fintuition',
    description: 'A shared company platform with advanced file uploading capabilities, developed in partnership with AiDevLab for financial technology solutions.',
    highlights: [
      { icon: '🏢', text: 'Shared company platform' },
      { icon: '📤', text: 'Advanced file uploading system' },
      { icon: '💰', text: 'Financial technology focus' }
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    duration: 'Current Project',
    company: 'AiDevLab Partnership'
  },
  {
    title: 'Valisight',
    description: 'A comprehensive file uploading and management system developed in partnership with AiDevLab, featuring advanced validation and insight capabilities.',
    highlights: [
      { icon: '📊', text: 'Advanced validation system' },
      { icon: '🔍', text: 'Data insight capabilities' },
      { icon: '📁', text: 'Intelligent file management' }
    ],
    technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5'],
    duration: 'Current Project',
    company: 'AiDevLab Partnership'
  },
  {
    title: 'Badaboom',
    description: 'An innovative platform with explosive growth potential, featuring advanced functionality and modern web technologies.',
    highlights: [
      { icon: '💥', text: 'Explosive growth potential' },
      { icon: '🚀', text: 'Scalable architecture' },
      { icon: '⚡', text: 'High-performance optimization' }
    ],
    technologies: ['React.js', 'Material UI', 'JavaScript', 'CSS3'],
    duration: 'Current Project',
    company: 'Senarios'
  },
  {
    title: 'Voiss',
    description: 'A comprehensive admin panel with complex functionality for managing teachers, students, and administrators with role-based access control.',
    highlights: [
      { icon: '👨‍💼', text: 'Admin panel with role management' },
      { icon: '👨‍🏫', text: 'Teacher and student management' },
      { icon: '🔐', text: 'Complex role-based access control' }
    ],
    technologies: ['React.js', 'Material UI', 'JavaScript', 'CSS3'],
    duration: 'Current Project',
    company: 'Senarios'
  },
  {
    title: 'HeyTara',
    description: 'An innovative communication and collaboration platform designed to enhance team productivity and streamline workflow management with modern web technologies.',
    highlights: [
      { icon: '💬', text: 'Real-time communication platform' },
      { icon: '🤝', text: 'Team collaboration features' },
      { icon: '📈', text: 'Productivity enhancement tools' }
    ],
    technologies: ['React.js', 'Material UI', 'JavaScript', 'CSS3'],
    duration: 'Current Project',
    company: 'Senarios'
  },
  {
    title: 'Kuboon',
    description: 'An innovative platform built using C# Razor Blazor, designed to provide a seamless user experience. I played a crucial role in development and enhancement of this dynamic web application.',
    highlights: [
      { icon: '🐛', text: 'Fixed UI bugs ensuring glitch-free experience' },
      { icon: '⚙️', text: 'Added new functionality using C# Razor Blazor' },
      { icon: '📄', text: 'Created new pages with intuitive navigation' }
    ],
    technologies: ['C#', 'Razor Blazor', 'CSS3', 'HTML5'],
    duration: 'Apr 2023 - Jun 2023',
    company: 'DukanLay'
  },
  {
    title: 'Digital Tribe Club',
    description: 'A community-driven website designed to foster collaboration, knowledge sharing, and networking among professionals in the digital domain with engaging design and responsive layouts.',
    highlights: [
      { icon: '👥', text: 'Community-driven collaboration platform' },
      { icon: '📱', text: 'Responsive design across all devices' },
      { icon: '🎨', text: 'Modern design with Bootstrap framework' }
    ],
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    duration: 'Jan 2023 - Feb 2023',
    company: 'Personal Project'
  },
  {
    title: 'VixoLink.com',
    description: 'A dynamic financial services platform where I actively participated in elevating user experience and capabilities through UI bug fixes, feature additions, and API integrations.',
    highlights: [
      { icon: '🎨', text: 'Fixed UI bugs ensuring polished user experience' },
      { icon: '⚙️', text: 'Added new functionality using React.js' },
      { icon: '🔗', text: 'Integrated APIs for real-time financial insights' }
    ],
    technologies: ['React.js', 'Web Services API', 'Bootstrap', 'JavaScript'],
    duration: 'Jun 2023 - Feb 2024',
    company: 'DukanLay'
  },
  {
    title: 'Local Splash',
    description: 'Contributed to bug fixing and feature development for a local services platform, ensuring smooth user experience and optimal performance.',
    highlights: [
      { icon: '🐛', text: 'Comprehensive bug fixing and testing' },
      { icon: '⚡', text: 'Performance optimization' },
      { icon: '🔧', text: 'Feature enhancement and maintenance' }
    ],
    technologies: ['JavaScript', 'React.js', 'CSS', 'HTML'],
    duration: 'Apr 2024 - Aug 2024',
    company: 'DukanLay'
  }
]

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>Showcasing my best work and contributions to innovative solutions</p>
        </motion.div>
        
        <div className={`projects-grid ${showAllProjects ? 'show-all' : ''}`}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="highlight">
                    <span className="highlight-icon">{highlight.icon}</span>
                    <span>{highlight.text}</span>
                  </div>
                ))}
              </div>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">{project.duration}</span>
                <span className="project-company">{project.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="view-more-container"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="view-more-btn"
            onClick={() => setShowAllProjects(!showAllProjects)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllProjects ? 'Show Less' : 'View More Projects'}
            <ChevronDown className={`view-more-icon ${showAllProjects ? 'rotated' : ''}`} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

