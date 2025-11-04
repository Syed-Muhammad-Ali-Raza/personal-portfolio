import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

const Contact = () => {
  return (
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
  )
}

export default Contact

