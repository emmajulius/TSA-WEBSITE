import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleAboutClick = (e) => {
    e.preventDefault()
    closeMobileMenu()
    
    if (location.pathname === '/') {
      // Already on home page, scroll to about section
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        const headerOffset = 80
        const elementPosition = aboutSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // Navigate to home page first, then scroll after page loads
      navigate('/')
      setTimeout(() => {
        const aboutSection = document.getElementById('about')
        if (aboutSection) {
          const headerOffset = 80
          const elementPosition = aboutSection.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 300)
    }
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
          <a href="#about" onClick={handleAboutClick} className={location.pathname === '/' ? 'active' : ''}>About</a>
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

