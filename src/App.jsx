import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Calendar,
  Award,
  Code,
  GraduationCap,
  Briefcase,
  Star,
  ExternalLink,
  ChevronDown
} from 'lucide-react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllCerts, setShowAllCerts] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <motion.nav 
        className="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="logo-icon" />
            <span>Syed Muhammad Ali Raza</span>
          </motion.div>
          <div className="nav-links">
            {['about', 'experience', 'projects', 'education', 'contact'].map((link) => (
              <button 
                key={link}
                className="nav-link"
                onClick={() => scrollToSection(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
        </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="about"
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Award className="badge-icon" />
              <span>Frontend Engineering Specialist</span>
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi, I'm <span className="highlight">Syed Muhammad Ali Raza</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A passionate Frontend Engineering Specialist with expertise in React.js, Angular, 
              and modern web technologies. I architect scalable applications and create 
              exceptional user experiences.
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies Mastered</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-actions"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="floating-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">"Syed Muhammad Ali Raza"</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> skills</span>
                  <span className="code-operator"> = [</span>
                </div>
                <div className="code-line indent">
                  <span className="code-string">"React.js"</span>
                  <span className="code-operator">,</span>
                </div>
                <div className="code-line indent">
                  <span className="code-string">"Angular"</span>
                  <span className="code-operator">,</span>
                </div>
                <div className="code-line indent">
                  <span className="code-string">"TypeScript"</span>
                </div>
                <div className="code-line">
                  <span className="code-operator">]</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('experience')}
        >
          <ChevronDown className="scroll-icon" />
        </motion.div>
      </motion.section>

      {/* Experience Section */}
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
            <motion.div 
              className="timeline-item"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <Briefcase className="marker-icon" />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer</h3>
                  <span className="company">Syed Muhammad Ali Raza</span>
                  <span className="duration">Mar 2024 - Present</span>
                </div>
                <div className="timeline-location">
                  <MapPin className="location-icon" />
                  <span>Pakistan · On-site</span>
                </div>
                <ul className="timeline-description">
                  <li>Design and implement scalable folder structures and architecture from scratch</li>
                  <li>Create reusable component libraries for consistent UI/UX across applications</li>
                  <li>Strategically integrate third-party packages to enhance functionality while maintaining performance</li>
                  <li>Use Tailwind CSS and Material UI to build responsive, modern admin interfaces</li>
                  <li>Currently leading development on an Angular 16 project integrated with serverless API architecture</li>
                  <li>Working on AiDevLab, an accessibility-focused platform providing report generation and video trimming solutions</li>
                </ul>
                <div className="technologies">
                  {['React.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Ant Design'].map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <Briefcase className="marker-icon" />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Associate Software Engineer</h3>
                  <span className="company">DukanLay</span>
                  <span className="duration">Mar 2023 - Feb 2024</span>
                </div>
                <div className="timeline-location">
                  <MapPin className="location-icon" />
                  <span>Lahore, Punjab, Pakistan · On-site</span>
                </div>
                <ul className="timeline-description">
                  <li>Spearheaded front-end development initiatives using React.js, creating intuitive and responsive user interfaces</li>
                  <li>Implemented modern JavaScript/ECMAScript solutions while adhering to industry best practices</li>
                  <li>Maintained robust version control workflows with Git and GitHub for efficient team collaboration</li>
                  <li>Applied Object-Oriented Programming principles to develop maintainable, scalable code architectures</li>
                  <li>Integrated and optimized Web Services APIs to ensure reliable data exchange</li>
                  <li>Managed SQL database operations to maintain data integrity and optimize query performance</li>
                </ul>
                <div className="technologies">
                  {['React.js', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap', 'Git', 'GitHub', 'SQL', 'REST APIs'].map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <Briefcase className="marker-icon" />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer Intern</h3>
                  <span className="company">DukanLay</span>
                  <span className="duration">Dec 2022 - Mar 2023</span>
                </div>
                <div className="timeline-location">
                  <MapPin className="location-icon" />
                  <span>Lahore, Punjab, Pakistan · On-site</span>
                </div>
                <p className="timeline-description">
                  Gained foundational experience in software development, contributing to various projects 
                  and learning industry best practices in a professional environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
            {/* AiDevLab Projects */}
            <motion.div 
              className="project-card featured"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>iKnow</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                A student awareness platform built with React.js, designed to educate and inform students 
                in the US about various important topics and resources.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🎓</span>
                  <span>Student awareness and education platform</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🇺🇸</span>
                  <span>Focused on US student community</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">📚</span>
                  <span>Educational content management</span>
                </div>
              </div>
              <div className="project-tech">
                {['React.js', 'JavaScript', 'CSS3', 'HTML5'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">AiDevLab</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>Umaadex</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                A comprehensive file and document management system that allows users to upload, 
                organize, and manage their documents efficiently.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">📁</span>
                  <span>File and document management</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">☁️</span>
                  <span>Cloud-based storage solution</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🔍</span>
                  <span>Advanced search and organization</span>
                </div>
              </div>
              <div className="project-tech">
                {['React.js', 'Material UI', 'JavaScript', 'CSS3'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">Senarios</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>Xperi</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                An innovative platform developed under AiDevLab partnership, focusing on 
                experimental features and cutting-edge technology implementations.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🧪</span>
                  <span>Experimental technology platform</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">⚡</span>
                  <span>Cutting-edge implementations</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🔬</span>
                  <span>Research and development focus</span>
                </div>
              </div>
              <div className="project-tech">
                {['Angular', 'TypeScript', 'CSS3', 'HTML5'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">AiDevLab</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>Serverless</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                A serverless architecture project demonstrating modern cloud computing 
                patterns and serverless application development.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">☁️</span>
                  <span>Serverless architecture implementation</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">⚡</span>
                  <span>Auto-scaling and cost optimization</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🔧</span>
                  <span>Microservices architecture</span>
                </div>
              </div>
              <div className="project-tech">
                {['Angular', 'Material UI', 'TypeScript', 'CSS3'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">Senarios</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>NumberHive</h3>
                <div className="project-links">
                {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                A dynamic website that displays content managed through the NumberBarn admin panel. 
                When content is added or updated in NumberBarn, it automatically reflects on NumberHive.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🔄</span>
                  <span>Dynamic content management</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">⚡</span>
                  <span>Real-time content updates</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🎯</span>
                  <span>Admin panel integration</span>
                </div>
              </div>
              <div className="project-tech">
                {['Angular', 'Material UI', 'TypeScript', 'CSS3'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">Senarios</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>NumberBarn Admin Panel</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                A comprehensive admin panel for managing NumberHive content. Administrators can add, 
                edit, and update content that automatically reflects on the NumberHive dynamic website.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">👨‍💼</span>
                  <span>Content management system</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🔄</span>
                  <span>Real-time content synchronization</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🎛️</span>
                  <span>Admin dashboard functionality</span>
                </div>
              </div>
              <div className="project-tech">
                {['Angular', 'Material UI', 'TypeScript', 'CSS3'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">Senarios</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>Fintuition</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                A shared company platform with advanced file uploading capabilities, 
                developed in partnership with AiDevLab for financial technology solutions.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🏢</span>
                  <span>Shared company platform</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">📤</span>
                  <span>Advanced file uploading system</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">💰</span>
                  <span>Financial technology focus</span>
                </div>
              </div>
              <div className="project-tech">
                {['React.js', 'JavaScript', 'CSS3', 'HTML5'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">AiDevLab Partnership</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>Valisight</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                A comprehensive file uploading and management system developed in partnership 
                with AiDevLab, featuring advanced validation and insight capabilities.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">📊</span>
                  <span>Advanced validation system</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🔍</span>
                  <span>Data insight capabilities</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">📁</span>
                  <span>Intelligent file management</span>
                </div>
              </div>
              <div className="project-tech">
                {['Angular', 'TypeScript', 'CSS3', 'HTML5'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">AiDevLab Partnership</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>Badaboom</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                An innovative platform with explosive growth potential, featuring 
                advanced functionality and modern web technologies.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">💥</span>
                  <span>Explosive growth potential</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🚀</span>
                  <span>Scalable architecture</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">⚡</span>
                  <span>High-performance optimization</span>
                </div>
              </div>
              <div className="project-tech">
                {['React.js', 'Material UI', 'JavaScript', 'CSS3'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">Senarios</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>Voiss</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                A comprehensive admin panel with complex functionality for managing teachers, 
                students, and administrators with role-based access control.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">👨‍💼</span>
                  <span>Admin panel with role management</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">👨‍🏫</span>
                  <span>Teacher and student management</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🔐</span>
                  <span>Complex role-based access control</span>
                </div>
              </div>
              <div className="project-tech">
                {['React.js', 'Material UI', 'JavaScript', 'CSS3'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">Senarios</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>HeyTara</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                An innovative communication and collaboration platform designed to enhance 
                team productivity and streamline workflow management with modern web technologies.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">💬</span>
                  <span>Real-time communication platform</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🤝</span>
                  <span>Team collaboration features</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">📈</span>
                  <span>Productivity enhancement tools</span>
                </div>
              </div>
              <div className="project-tech">
                {['React.js', 'Material UI', 'JavaScript', 'CSS3'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Current Project</span>
                <span className="project-company">Senarios</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>Kuboon</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                An innovative platform built using C# Razor Blazor, designed to provide a seamless user experience. 
                I played a crucial role in development and enhancement of this dynamic web application.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🐛</span>
                  <span>Fixed UI bugs ensuring glitch-free experience</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">⚙️</span>
                  <span>Added new functionality using C# Razor Blazor</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">📄</span>
                  <span>Created new pages with intuitive navigation</span>
                </div>
              </div>
              <div className="project-tech">
                {['C#', 'Razor Blazor', 'CSS3', 'HTML5'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Apr 2023 - Jun 2023</span>
                <span className="project-company">DukanLay</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>Digital Tribe Club</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                A community-driven website designed to foster collaboration, knowledge sharing, and networking 
                among professionals in the digital domain with engaging design and responsive layouts.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">👥</span>
                  <span>Community-driven collaboration platform</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">📱</span>
                  <span>Responsive design across all devices</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🎨</span>
                  <span>Modern design with Bootstrap framework</span>
                </div>
              </div>
              <div className="project-tech">
                {['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Jan 2023 - Feb 2023</span>
                <span className="project-company">Personal Project</span>
              </div>
            </motion.div>

            {/* Legacy Projects */}
            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>VixoLink.com</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                A dynamic financial services platform where I actively participated in elevating user experience 
                and capabilities through UI bug fixes, feature additions, and API integrations.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🎨</span>
                  <span>Fixed UI bugs ensuring polished user experience</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">⚙️</span>
                  <span>Added new functionality using React.js</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🔗</span>
                  <span>Integrated APIs for real-time financial insights</span>
                </div>
              </div>
              <div className="project-tech">
                {['React.js', 'Web Services API', 'Bootstrap', 'JavaScript'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Jun 2023 - Feb 2024</span>
                <span className="project-company">DukanLay</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>Local Splash</h3>
                <div className="project-links">
                  {/* <ExternalLink className="link-icon" /> */}
                </div>
              </div>
              <p className="project-description">
                Contributed to bug fixing and feature development for a local services platform, 
                ensuring smooth user experience and optimal performance.
              </p>
              <div className="project-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🐛</span>
                  <span>Comprehensive bug fixing and testing</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">⚡</span>
                  <span>Performance optimization</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🔧</span>
                  <span>Feature enhancement and maintenance</span>
                </div>
              </div>
              <div className="project-tech">
                {['JavaScript', 'React.js', 'CSS', 'HTML'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="project-duration">Apr 2024 - Aug 2024</span>
                <span className="project-company">DukanLay</span>
              </div>
            </motion.div>
          </div>
          
          {/* View More Button */}
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

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Education & Certifications</h2>
            <p>Continuous learning and professional development</p>
          </motion.div>
          
          <div className="education-grid">
            <motion.div 
              className="education-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="education-header">
                <GraduationCap className="education-icon" />
                <div className="education-title">
                  <h3>Master's Degree in Computer Science</h3>
                  <span className="education-institution">University of Engineering and Technology, Lahore</span>
                </div>
              </div>
              <div className="education-details">
                <span className="education-duration">Sep 2023 - Sep 2025</span>
                <div className="education-subjects">
                  <span className="subject-tag">Advanced Analysis of Algorithms</span>
                  <span className="subject-tag">Computer Architecture</span>
                  <span className="subject-tag">Machine Learning</span>
                  <span className="subject-tag">Cloud Computing</span>
                  <span className="subject-tag">Natural Language Processing</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="education-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="education-header">
                <GraduationCap className="education-icon" />
                <div className="education-title">
                  <h3>Bachelor's Degree in Computer Science</h3>
                  <span className="education-institution">University of Engineering and Technology, Lahore</span>
                </div>
              </div>
              <div className="education-details">
                <span className="education-duration">2017 - 2021</span>
                <div className="education-subjects">
                  <span className="subject-tag">Data Structures & Algorithms</span>
                  <span className="subject-tag">Software Engineering</span>
                  <span className="subject-tag">Database Management</span>
                  <span className="subject-tag">Web Technologies</span>
                  <span className="subject-tag">Operating Systems</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="certifications"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Certifications & Awards</h3>
              <div className={`cert-grid ${showAllCerts ? 'show-all' : ''}`}>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Front-end Web Development Hackathon</h4>
                    <span className="cert-issuer">Microsoft Learn Student Ambassadors</span>
                    <span className="cert-date">Mar 2025</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Cloud Computing & AWS</h4>
                    <span className="cert-issuer">IEEE Robotics and Automation Society</span>
                    <span className="cert-date">Mar 2025</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Plantation Week Participation</h4>
                    <span className="cert-issuer">Al Khidmat Foundation Lahore</span>
                    <span className="cert-date">Feb 2025</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Web Development 2025 Marathon</h4>
                    <span className="cert-issuer">GDSC</span>
                    <span className="cert-date">Feb 2025</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Front-End Development</h4>
                    <span className="cert-issuer">Upwork</span>
                    <span className="cert-date">Oct 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Javascript Front-End Development</h4>
                    <span className="cert-issuer">Upwork</span>
                    <span className="cert-date">Oct 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Artificial Intelligence Micro-Certification (AIC)™️</h4>
                    <span className="cert-issuer">Product School</span>
                    <span className="cert-date">Sep 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Product Analytics Micro-Certification (PAC)™️</h4>
                    <span className="cert-issuer">Product School</span>
                    <span className="cert-date">Sep 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Product Discovery Micro-Certification (PDC)™️</h4>
                    <span className="cert-issuer">Product School</span>
                    <span className="cert-date">Sep 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Product-Led Growth Micro-Certification (PLGC)™️</h4>
                    <span className="cert-issuer">Product School</span>
                    <span className="cert-date">Sep 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Frontend Developer (React)</h4>
                    <span className="cert-issuer">HackerRank</span>
                    <span className="cert-date">Aug 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>JavaScript Certification Test</h4>
                    <span className="cert-issuer">Complete Coding by Prashant Sir</span>
                    <span className="cert-date">Aug 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Gemini API by Google</h4>
                    <span className="cert-issuer">Udacity</span>
                    <span className="cert-date">Jul 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Google Soft Skills Program</h4>
                    <span className="cert-issuer">PAFLA - Pakistan Freelancers Association</span>
                    <span className="cert-date">Jul 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Frontend Development 101 Workshop</h4>
                    <span className="cert-issuer">Google Developer Group on Campus - UET</span>
                    <span className="cert-date">Mar 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>AWS S3 Basics</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Azure REST API using NodeJS Serverless</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Blockchain Basics</h4>
                    <span className="cert-issuer">Great Learning</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Business Analysis & Process Management</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Cloud Foundation</h4>
                    <span className="cert-issuer">Great Learning</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Lead Generation Messenger Chatbot</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>LinkedIn Profile and Network</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Custom Prediction Routine on Google AI Platform</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Free Website with WordPress</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Let's Learn AI: Azure Odyssey</h4>
                    <span className="cert-issuer">Microsoft Learn Student Ambassadors</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Microsoft Power BI Challenge</h4>
                    <span className="cert-issuer">Microsoft Learn Student Ambassador - IIUI</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Optimize TensorFlow Models For Deployment</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Overview of Data Visualization</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Problem Solving Basics</h4>
                    <span className="cert-issuer">HackerRank</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>React.js</h4>
                    <span className="cert-issuer">Great Learning</span>
                    <span className="cert-date">Feb 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Get Started with Figma</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Nov 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>MS Power Platform Fundamentals</h4>
                    <span className="cert-issuer">MLSA-VU</span>
                    <span className="cert-date">Nov 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Azure AI Fundamentals</h4>
                    <span className="cert-issuer">Microsoft Learn Student Ambassadors</span>
                    <span className="cert-date">Oct 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Github Cloud Challenge</h4>
                    <span className="cert-issuer">Microsoft Learn Student Ambassadors</span>
                    <span className="cert-date">Oct 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Beginners Overview of Swagger Editor</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Aug 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Git - Github Fundamentals</h4>
                    <span className="cert-issuer">Microsoft Learn Student Ambassadors</span>
                    <span className="cert-date">Jun 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Participation Prize</h4>
                    <span className="cert-issuer">Pangea</span>
                    <span className="cert-date">Jun 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Google Drive Clone using HTML & CSS</h4>
                    <span className="cert-issuer">DevTown</span>
                    <span className="cert-date">Apr 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Modern Javascript ES6 Basics</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Mar 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>The Fundamental of Digital Marketing</h4>
                    <span className="cert-issuer">Google Digital Garage</span>
                    <span className="cert-date">Jan 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Mobile App Development</h4>
                    <span className="cert-issuer">e-Rozgaar Program - Punjab IT Board</span>
                    <span className="cert-date">Jun 2022</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Online Freelancing Course</h4>
                    <span className="cert-issuer">Jawan Pakistan</span>
                    <span className="cert-date">May 2022</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Blockchain and Communication Networks</h4>
                    <span className="cert-issuer">GCU-ACM Student Chapter</span>
                    <span className="cert-date">Jun 2021</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Industrial Automation using SCADA</h4>
                    <span className="cert-issuer">IEEE PES DAY</span>
                    <span className="cert-date">Apr 2021</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Linkedin for Students</h4>
                    <span className="cert-issuer">Mechatronics Club</span>
                    <span className="cert-date">Feb 2021</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>AWS Beginner Series Episode 4</h4>
                    <span className="cert-issuer">AWS Community Pakistan</span>
                    <span className="cert-date">Jan 2021</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Introduction to Artificial Intelligence (AI)</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Sep 2020</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>SQL for Data Science</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Sep 2020</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>IT Project Management</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Aug 2020</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Blockchain and Cryptocurrency Explained</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Jul 2020</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                    <span className="cert-issuer">Coursera</span>
                    <span className="cert-date">Jul 2020</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>E-Commerce Management</h4>
                    <span className="cert-issuer">DigiSkills.pk</span>
                    <span className="cert-date">May 2020</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>WordPress</h4>
                    <span className="cert-issuer">DigiSkills.pk</span>
                    <span className="cert-date">Oct 2019</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Web Application Development</h4>
                    <span className="cert-issuer">Al-Khawarizmi Institute of Computer Science (KICS), UET Lahore</span>
                    <span className="cert-date">Aug 2019</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>CERTIFICATE OF MEMBERSHIP</h4>
                    <span className="cert-issuer">PAFLA - Pakistan Freelancers Association</span>
                    <span className="cert-date">Aug 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Front-End Web Development using JavaScript and React.js</h4>
                    <span className="cert-issuer">DevTown</span>
                    <span className="cert-date">Apr 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Web Animations using CSS</h4>
                    <span className="cert-issuer">DevTown</span>
                    <span className="cert-date">Mar 2023</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>BIG DATA Workshop</h4>
                    <span className="cert-issuer">IEEE</span>
                    <span className="cert-date">Recent</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Certificate of Participant</h4>
                    <span className="cert-issuer">National Initiative For Artificial Intelligence and Security</span>
                    <span className="cert-date">Recent</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Digital Marketing</h4>
                    <span className="cert-issuer">DigiSkills.pk</span>
                    <span className="cert-date">Recent</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Freelancing</h4>
                    <span className="cert-issuer">DigiSkills.pk</span>
                    <span className="cert-date">Recent</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Hackathon Competition</h4>
                    <span className="cert-issuer">Superior University Lahore, Pakistan</span>
                    <span className="cert-date">Recent</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Cipher Craft 2024 Judge</h4>
                    <span className="cert-issuer">Cipher Craft</span>
                    <span className="cert-date">Sep 2024</span>
                  </div>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>Employee of the Month</h4>
                    <span className="cert-issuer">DukanLay</span>
                    <span className="cert-date">Sep 2023</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* View More Button for Certifications */}
            <motion.div 
              className="view-more-container"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="view-more-btn"
                onClick={() => setShowAllCerts(!showAllCerts)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllCerts ? 'Show Less Certifications' : 'View More Certifications'}
                <ChevronDown className={`view-more-icon ${showAllCerts ? 'rotated' : ''}`} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Technical Skills</h2>
            <p>Technologies and tools I work with</p>
          </motion.div>
          
          <div className={`skills-grid ${showAllSkills ? 'show-all' : ''}`}>
            <motion.div 
              className="skill-category"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Frontend Technologies</h3>
              <div className="skill-items">
                {['React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'ES6'].map(skill => (
                  <motion.div 
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="skill-category"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>UI/UX Frameworks</h3>
              <div className="skill-items">
                {['Tailwind CSS', 'Material UI', 'Ant Design', 'Bootstrap', 'CSS Modules', 'Styled Components', 'Figma'].map(skill => (
                  <motion.div 
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="skill-category"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Development Tools</h3>
              <div className="skill-items">
                {['Git', 'GitHub', 'Vite', 'Webpack', 'Visual Studio Code', 'Chrome DevTools', 'Responsive Design'].map(skill => (
                  <motion.div 
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="skill-category"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Web Technologies</h3>
              <div className="skill-items">
                {['Web Development', 'Web Design', 'Web Application Development', 'Mobile Application Development', 'React Native', 'WordPress', 'E-commerce'].map(skill => (
                  <motion.div 
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="skill-category"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h3>Programming & Design</h3>
              <div className="skill-items">
                {['Object-Oriented Programming (OOP)', 'Algorithms', 'Data Structures', 'Web Services API', 'Redux.js', 'MERN Stack', 'Canva'].map(skill => (
                  <motion.div 
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
          
          {/* View More Button for Skills */}
          <motion.div 
            className="view-more-container"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="view-more-btn"
              onClick={() => setShowAllSkills(!showAllSkills)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllSkills ? 'Show Less Skills' : 'View More Skills'}
              <ChevronDown className={`view-more-icon ${showAllSkills ? 'rotated' : ''}`} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Let's Work Together</h2>
            <p>Ready to bring your ideas to life? Let's discuss your next project</p>
          </motion.div>
          
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Get In Touch</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="contact-methods">
                <motion.a 
                  href="mailto:smaliraza412@gmail.com"
                  className="contact-method"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="contact-icon" />
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">smaliraza412@gmail.com</span>
      </div>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/syed-muhammad-ali-raza/"
                  className="contact-method"
                  whileHover={{ scale: 1.05 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="contact-icon" />
                  <div>
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">linkedin.com/in/syed-muhammad-ali-raza</span>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/Syed-Muhammad-Ali-Raza"
                  className="contact-method"
                  whileHover={{ scale: 1.05 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="contact-icon" />
                  <div>
                    <span className="contact-label">GitHub</span>
                    <span className="contact-value">github.com/Syed-Muhammad-Ali-Raza</span>
                  </div>
                </motion.a>
                
                <div className="contact-method">
                  <MapPin className="contact-icon" />
                  <div>
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Lahore, Pakistan</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Code className="footer-logo" />
              <span>Syed Muhammad Ali Raza</span>
            </div>
            <p className="footer-text">
              Frontend Engineering Specialist passionate about creating exceptional user experiences.
            </p>
            <div className="footer-links">
              <a href="https://github.com/Syed-Muhammad-Ali-Raza" target="_blank" rel="noopener noreferrer">
                <Github className="footer-icon" />
              </a>
              <a href="https://www.linkedin.com/in/syed-muhammad-ali-raza/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="footer-icon" />
              </a>
              <a href="mailto:smaliraza412@gmail.com">
                <Mail className="footer-icon" />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Syed Muhammad Ali Raza. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default App