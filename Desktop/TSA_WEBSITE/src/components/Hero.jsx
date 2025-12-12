import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CodeSnippet from './CodeSnippet'
import './Hero.css'

const Hero = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="hero-badge">
            <span>🚀 Trusted by Leading Businesses</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-title-main">TSA Digital Solutions</span>
            <span className="hero-title-sub">Technique, Speed & Accuracy</span>
          </h1>
          <p className="hero-tagline">
            We transforming Ideas To digital success stories
          </p>
          <p className="hero-description">
            Empowering businesses with cutting-edge technology solutions that combine 
            technical excellence, rapid delivery, and precision execution. We transform 
            your vision into reality with innovative digital solutions.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>
              <span>Get Started</span>
              <span className="btn-arrow">→</span>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/services')}
            >
              Explore Services
            </button>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={`hero-visual ${isVisible ? 'fade-in-right' : ''}`}>
          <div className="code-showcase">
            <CodeSnippet />
          </div>
          <div className="hero-cards-wrapper">
            <div className="hero-card card-1">
              <div className="card-icon">💻</div>
              <h3>Digital Innovation</h3>
              <p>Cutting-edge solutions for modern businesses</p>
            </div>
            <div className="hero-card card-2">
              <div className="card-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Rapid development without compromising quality</p>
            </div>
            <div className="hero-card card-3">
              <div className="card-icon">🎯</div>
              <h3>Precision Results</h3>
              <p>Accurate execution in every project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

