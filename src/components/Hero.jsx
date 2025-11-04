import { motion } from 'framer-motion'
import { Award, ChevronDown } from 'lucide-react'

const Hero = ({ scrollToSection }) => {
  return (
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
                <span className="code-string">"Next.js"</span>
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
  )
}

export default Hero

