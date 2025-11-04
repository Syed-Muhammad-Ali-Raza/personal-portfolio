import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Technologies',
    skills: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'ES6']
  },
  {
    title: 'UI/UX Frameworks',
    skills: ['Tailwind CSS', 'Material UI', 'Ant Design', 'Bootstrap', 'CSS Modules', 'Styled Components', 'Figma']
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'Vite', 'Webpack', 'Visual Studio Code', 'Chrome DevTools', 'Responsive Design']
  },
  {
    title: 'Web Technologies',
    skills: ['Web Development', 'Web Design', 'Web Application Development', 'Mobile Application Development', 'React Native', 'WordPress', 'E-commerce']
  },
  {
    title: 'Programming & Design',
    skills: ['Object-Oriented Programming (OOP)', 'Algorithms', 'Data Structures', 'Web Services API', 'Redux.js', 'MERN Stack', 'Canva']
  }
]

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false)

  return (
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
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map(skill => (
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
  )
}

export default Skills

