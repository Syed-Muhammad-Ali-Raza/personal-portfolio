import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, ChevronDown } from 'lucide-react'

const education = [
  {
    degree: "Master's Degree in Computer Science",
    institution: 'University of Engineering and Technology, Lahore',
    duration: 'Sep 2023 - Sep 2025',
    subjects: [
      'Advanced Analysis of Algorithms',
      'Computer Architecture',
      'Machine Learning',
      'Cloud Computing',
      'Natural Language Processing'
    ]
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: 'University of Engineering and Technology, Lahore',
    duration: '2017 - 2021',
    subjects: [
      'Data Structures & Algorithms',
      'Software Engineering',
      'Database Management',
      'Web Technologies',
      'Operating Systems'
    ]
  }
]

const certifications = [
  { title: 'Front-end Web Development Hackathon', issuer: 'Microsoft Learn Student Ambassadors', date: 'Mar 2025' },
  { title: 'Cloud Computing & AWS', issuer: 'IEEE Robotics and Automation Society', date: 'Mar 2025' },
  { title: 'Plantation Week Participation', issuer: 'Al Khidmat Foundation Lahore', date: 'Feb 2025' },
  { title: 'Web Development 2025 Marathon', issuer: 'GDSC', date: 'Feb 2025' },
  { title: 'Front-End Development', issuer: 'Upwork', date: 'Oct 2024' },
  { title: 'Javascript Front-End Development', issuer: 'Upwork', date: 'Oct 2024' },
  { title: 'Artificial Intelligence Micro-Certification (AIC)™️', issuer: 'Product School', date: 'Sep 2024' },
  { title: 'Product Analytics Micro-Certification (PAC)™️', issuer: 'Product School', date: 'Sep 2024' },
  { title: 'Product Discovery Micro-Certification (PDC)™️', issuer: 'Product School', date: 'Sep 2024' },
  { title: 'Product-Led Growth Micro-Certification (PLGC)™️', issuer: 'Product School', date: 'Sep 2024' },
  { title: 'Frontend Developer (React)', issuer: 'HackerRank', date: 'Aug 2024' },
  { title: 'JavaScript Certification Test', issuer: 'Complete Coding by Prashant Sir', date: 'Aug 2024' },
  { title: 'Gemini API by Google', issuer: 'Udacity', date: 'Jul 2024' },
  { title: 'Google Soft Skills Program', issuer: 'PAFLA - Pakistan Freelancers Association', date: 'Jul 2024' },
  { title: 'Frontend Development 101 Workshop', issuer: 'Google Developer Group on Campus - UET', date: 'Mar 2024' },
  { title: 'AWS S3 Basics', issuer: 'Coursera', date: 'Feb 2024' },
  { title: 'Azure REST API using NodeJS Serverless', issuer: 'Coursera', date: 'Feb 2024' },
  { title: 'Blockchain Basics', issuer: 'Great Learning', date: 'Feb 2024' },
  { title: 'Business Analysis & Process Management', issuer: 'Coursera', date: 'Feb 2024' },
  { title: 'Cloud Foundation', issuer: 'Great Learning', date: 'Feb 2024' },
  { title: 'Lead Generation Messenger Chatbot', issuer: 'Coursera', date: 'Feb 2024' },
  { title: 'LinkedIn Profile and Network', issuer: 'Coursera', date: 'Feb 2024' },
  { title: 'Custom Prediction Routine on Google AI Platform', issuer: 'Coursera', date: 'Feb 2024' },
  { title: 'Free Website with WordPress', issuer: 'Coursera', date: 'Feb 2024' },
  { title: "Let's Learn AI: Azure Odyssey", issuer: 'Microsoft Learn Student Ambassadors', date: 'Feb 2024' },
  { title: 'Microsoft Power BI Challenge', issuer: 'Microsoft Learn Student Ambassador - IIUI', date: 'Feb 2024' },
  { title: 'Optimize TensorFlow Models For Deployment', issuer: 'Coursera', date: 'Feb 2024' },
  { title: 'Overview of Data Visualization', issuer: 'Coursera', date: 'Feb 2024' },
  { title: 'Problem Solving Basics', issuer: 'HackerRank', date: 'Feb 2024' },
  { title: 'React.js', issuer: 'Great Learning', date: 'Feb 2024' },
  { title: 'Get Started with Figma', issuer: 'Coursera', date: 'Nov 2023' },
  { title: 'MS Power Platform Fundamentals', issuer: 'MLSA-VU', date: 'Nov 2023' },
  { title: 'Azure AI Fundamentals', issuer: 'Microsoft Learn Student Ambassadors', date: 'Oct 2023' },
  { title: 'Github Cloud Challenge', issuer: 'Microsoft Learn Student Ambassadors', date: 'Oct 2023' },
  { title: 'Beginners Overview of Swagger Editor', issuer: 'Coursera', date: 'Aug 2023' },
  { title: 'Git - Github Fundamentals', issuer: 'Microsoft Learn Student Ambassadors', date: 'Jun 2023' },
  { title: 'Participation Prize', issuer: 'Pangea', date: 'Jun 2023' },
  { title: 'Google Drive Clone using HTML & CSS', issuer: 'DevTown', date: 'Apr 2023' },
  { title: 'Modern Javascript ES6 Basics', issuer: 'Coursera', date: 'Mar 2023' },
  { title: 'The Fundamental of Digital Marketing', issuer: 'Google Digital Garage', date: 'Jan 2023' },
  { title: 'Mobile App Development', issuer: 'e-Rozgaar Program - Punjab IT Board', date: 'Jun 2022' },
  { title: 'Online Freelancing Course', issuer: 'Jawan Pakistan', date: 'May 2022' },
  { title: 'Blockchain and Communication Networks', issuer: 'GCU-ACM Student Chapter', date: 'Jun 2021' },
  { title: 'Industrial Automation using SCADA', issuer: 'IEEE PES DAY', date: 'Apr 2021' },
  { title: 'Linkedin for Students', issuer: 'Mechatronics Club', date: 'Feb 2021' },
  { title: 'AWS Beginner Series Episode 4', issuer: 'AWS Community Pakistan', date: 'Jan 2021' },
  { title: 'Introduction to Artificial Intelligence (AI)', issuer: 'Coursera', date: 'Sep 2020' },
  { title: 'SQL for Data Science', issuer: 'Coursera', date: 'Sep 2020' },
  { title: 'IT Project Management', issuer: 'Coursera', date: 'Aug 2020' },
  { title: 'Blockchain and Cryptocurrency Explained', issuer: 'Coursera', date: 'Jul 2020' },
  { title: 'Introduction to Cybersecurity Tools & Cyber Attacks', issuer: 'Coursera', date: 'Jul 2020' },
  { title: 'E-Commerce Management', issuer: 'DigiSkills.pk', date: 'May 2020' },
  { title: 'WordPress', issuer: 'DigiSkills.pk', date: 'Oct 2019' },
  { title: 'Web Application Development', issuer: 'Al-Khawarizmi Institute of Computer Science (KICS), UET Lahore', date: 'Aug 2019' },
  { title: 'CERTIFICATE OF MEMBERSHIP', issuer: 'PAFLA - Pakistan Freelancers Association', date: 'Aug 2023' },
  { title: 'Front-End Web Development using JavaScript and React.js', issuer: 'DevTown', date: 'Apr 2023' },
  { title: 'Web Animations using CSS', issuer: 'DevTown', date: 'Mar 2023' },
  { title: 'BIG DATA Workshop', issuer: 'IEEE', date: 'Recent' },
  { title: 'Certificate of Participant', issuer: 'National Initiative For Artificial Intelligence and Security', date: 'Recent' },
  { title: 'Digital Marketing', issuer: 'DigiSkills.pk', date: 'Recent' },
  { title: 'Freelancing', issuer: 'DigiSkills.pk', date: 'Recent' },
  { title: 'Hackathon Competition', issuer: 'Superior University Lahore, Pakistan', date: 'Recent' },
  { title: 'Cipher Craft 2024 Judge', issuer: 'Cipher Craft', date: 'Sep 2024' },
  { title: 'Employee of the Month', issuer: 'DukanLay', date: 'Sep 2023' }
]

const Education = () => {
  const [showAllCerts, setShowAllCerts] = useState(false)

  return (
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
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="education-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              viewport={{ once: true }}
            >
              <div className="education-header">
                <GraduationCap className="education-icon" />
                <div className="education-title">
                  <h3>{edu.degree}</h3>
                  <span className="education-institution">{edu.institution}</span>
                </div>
              </div>
              <div className="education-details">
                <span className="education-duration">{edu.duration}</span>
                <div className="education-subjects">
                  {edu.subjects.map((subject, i) => (
                    <span key={i} className="subject-tag">{subject}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div 
            className="certifications"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Certifications & Awards</h3>
            <div className={`cert-grid ${showAllCerts ? 'show-all' : ''}`}>
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <Award className="cert-icon" />
                  <div className="cert-details">
                    <h4>{cert.title}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
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
                onClick={() => setShowAllCerts(!showAllCerts)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllCerts ? 'Show Less Certifications' : 'View More Certifications'}
                <ChevronDown className={`view-more-icon ${showAllCerts ? 'rotated' : ''}`} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

