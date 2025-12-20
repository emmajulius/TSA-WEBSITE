import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <div className="logo">
            <span className="logo-text">TSA</span>
            <span className="logo-subtitle">Digital Solutions</span>
          </div>
        </Link>
        
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/services" onClick={closeMobileMenu} className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/booking" onClick={closeMobileMenu} className={location.pathname === '/booking' ? 'active' : ''}>Booking</Link>
          <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

