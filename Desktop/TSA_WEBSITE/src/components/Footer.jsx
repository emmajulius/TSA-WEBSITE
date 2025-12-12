import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
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
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/booking">Booking</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Solutions</li>
              <li>UI/UX Design</li>
              <li>E-Commerce Solutions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>📧 info@tsadigitalsolutions.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Tech Street, Digital City</li>
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

