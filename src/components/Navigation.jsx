import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

const Navigation = ({ scrollToSection }) => {
  return (
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
          onClick={() => scrollToSection('about')}
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
  )
}

export default Navigation

