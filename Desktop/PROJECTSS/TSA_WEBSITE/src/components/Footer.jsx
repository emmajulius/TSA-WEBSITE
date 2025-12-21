import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerContentRef = useRef(null)

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe footer sections
    if (footerContentRef.current) {
      const footerSections = footerContentRef.current.children
      Array.from(footerSections).forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`
        observer.observe(section)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content" ref={footerContentRef}>
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">TSA</span>
              <span className="logo-subtitle">Digital Solutions</span>
            </div>
            <p className="footer-tagline">
              We transforming Ideas To digital success stories
            </p>
            <p className="footer-description">
              Technique, Speed, and Accuracy in every solution we deliver.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/booking">Booking</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Graphic Design</li>
              <li>E-Commerce Solutions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>📧 info@tsadigitalsolutions.com</li>
              <li>📞 +255756556768 / +255650379646</li>
              <li>📍 Dar es Salaam city, Tanzania</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TSA Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

