import { useState, useEffect } from 'react'
import Certifications from './Certifications'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      title: 'Technique',
      icon: '🔧',
      description: 'Mastering the latest technologies and best practices to deliver robust, scalable solutions.',
      details: 'We stay ahead of technology trends and continuously upgrade our skills to provide cutting-edge solutions.'
    },
    {
      title: 'Speed',
      icon: '⚡',
      description: 'Rapid development cycles without compromising quality, ensuring quick time-to-market.',
      details: 'Our agile methodology and efficient processes enable us to deliver projects faster than industry standards.'
    },
    {
      title: 'Accuracy',
      icon: '🎯',
      description: 'Precision in every detail, from code quality to project delivery, ensuring flawless execution.',
      details: 'We maintain rigorous quality standards and thorough testing to ensure error-free deliverables.'
    }
  ]

  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to transform digital solutions' },
    { year: '2017', title: '100 Projects', description: 'Reached milestone of 100 successful project deliveries' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as a leading IT solutions provider' }
  ]

  const team = [
    { name: 'Expert Developers', count: '25+', icon: '👨‍💻' },
    { name: 'Design Specialists', count: '10+', icon: '🎨' },
    { name: 'Project Managers', count: '8+', icon: '👔' },
    { name: 'QA Engineers', count: '12+', icon: '🔍' }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-badge">About Us</span>
          <h2 className="section-title">About TSA Digital Solutions</h2>
          <p className="section-subtitle">
            We are a forward-thinking IT company dedicated to transforming your business ideas 
            into successful digital solutions. With over 3 years of experience, we've helped 
            countless businesses achieve their digital transformation goals.
          </p>
        </div>

        <div className={`values-grid ${isVisible ? 'fade-in' : ''}`}>
          {values.map((value, index) => (
            <div key={index} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="value-icon-wrapper">
                <div className="value-icon">{value.icon}</div>
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <p className="value-details">{value.details}</p>
            </div>
          ))}
        </div>

        <div className="about-content">
          <div className={`about-text ${isVisible ? 'fade-in-left' : ''}`}>
            <div className="content-section">
              <h3>Our Mission</h3>
              <p>
                At TSA Digital Solutions, we believe that every great business idea deserves 
                exceptional digital execution. Our mission is to bridge the gap between vision 
                and reality by providing world-class IT solutions that drive growth and innovation.
              </p>
            </div>
            <div className="content-section">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted partner for businesses seeking digital transformation, 
                recognized for our commitment to excellence, innovation, and client success. 
                We envision a future where technology seamlessly integrates with business goals 
                to create extraordinary outcomes.
              </p>
            </div>
            <div className="content-section">
              <h3>Why Choose Us</h3>
              <ul className="features-list">
                <li>Proven track record with 100+ successful projects</li>
                <li>Expert team with years of industry experience</li>
                <li>Cutting-edge technology stack and methodologies</li>
                <li>Dedicated support and maintenance services</li>
                <li>Transparent communication and project management</li>
                <li>Competitive pricing with flexible engagement models</li>
              </ul>
            </div>
          </div>
          <div className={`about-stats ${isVisible ? 'fade-in-right' : ''}`}>
            <div className="stat-item">
              <div className="stat-icon">📊</div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">😊</div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🔄</div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="timeline-title">Our Journey</h3>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Our Team</h3>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-icon">{member.icon}</div>
                <div className="team-count">{member.count}</div>
                <div className="team-name">{member.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Certifications />
    </section>
  )
}

export default About

