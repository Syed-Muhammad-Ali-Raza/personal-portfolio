import { Code, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
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
  )
}

export default Footer

