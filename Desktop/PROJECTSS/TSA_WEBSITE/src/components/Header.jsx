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

  const handleHomeClick = (e) => {
    e.preventDefault()
    closeMobileMenu()
    
    if (location.pathname === '/') {
      // Already on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      // Navigate to home page first, then scroll to top after page loads
      navigate('/')
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 100)
    }
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

  const handleServicesClick = (e) => {
    e.preventDefault()
    closeMobileMenu()
    
    if (location.pathname === '/services') {
      // Already on services page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      // Navigate to services page first, then scroll to top after page loads
      navigate('/services')
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 100)
    }
  }

  const handleBookingClick = (e) => {
    e.preventDefault()
    closeMobileMenu()
    
    if (location.pathname === '/services') {
      // Already on services page, scroll to booking section
      const bookingSection = document.getElementById('booking')
      if (bookingSection) {
        const headerOffset = 80
        const elementPosition = bookingSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // Navigate to services page first, then scroll after page loads
      navigate('/services')
      setTimeout(() => {
        const bookingSection = document.getElementById('booking')
        if (bookingSection) {
          const headerOffset = 80
          const elementPosition = bookingSection.getBoundingClientRect().top
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
        <a href="/" className="logo-link" onClick={handleHomeClick}>
          <div className="logo">
            <span className="logo-text">TSA</span>
            <span className="logo-subtitle">Digital Solutions</span>
          </div>
        </a>
        
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/" onClick={handleHomeClick} className={location.pathname === '/' ? 'active' : ''}>Home</a>
          <a href="#about" onClick={handleAboutClick} className={location.pathname === '/' ? 'active' : ''}>About</a>
          <a href="/services" onClick={handleServicesClick} className={location.pathname === '/services' ? 'active' : ''}>Services</a>
          <a href="#booking" onClick={handleBookingClick} className={location.pathname === '/services' ? 'active' : ''}>Booking</a>
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

