import { useState, useEffect, useRef } from 'react'
import { isValidPhoneNumber } from 'libphonenumber-js'
import './Contact.css'

const Contact = () => {
  const contactInfoRef = useRef(null)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [phoneError, setPhoneError] = useState('')

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

    // Observe info cards
    if (contactInfoRef.current) {
      const infoCards = contactInfoRef.current.children
      Array.from(infoCards).forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`
        observer.observe(card)
      })
    }

    // Observe form
    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const validatePhone = (phone) => {
    if (!phone) {
      setPhoneError('')
      return true
    }
    
    // Check if phone starts with +
    if (!phone.startsWith('+')) {
      setPhoneError('Phone number must start with country code (e.g., +255, +254)')
      return false
    }
    
    // Validate phone number using libphonenumber-js
    try {
      const isValid = isValidPhoneNumber(phone)
      if (isValid) {
        setPhoneError('')
        return true
      } else {
        setPhoneError('Please enter a valid international phone number')
        return false
      }
    } catch (error) {
      setPhoneError('Please enter a valid international phone number')
      return false
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Validate phone number in real-time
    if (name === 'phone') {
      validatePhone(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate phone number before submission
    if (!validatePhone(formData.phone)) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setPhoneError('')
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to transform your ideas into digital success? Let's start a conversation. 
            We're here to help you achieve your goals.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info" ref={contactInfoRef}>
            <div className="info-card contact-card-small">
              <div className="info-icon-wrapper">
                <div className="info-icon">📧</div>
              </div>
              <h3>Email Us</h3>
              <div className="info-details">
                <a href="mailto:info@tsadigitalsolutions.com">info@tsadigitalsolutions.com</a>
                <a href="mailto:support@tsadigitalsolutions.com">support@tsadigitalsolutions.com</a>
              </div>
              <p className="info-note">We typically respond within 24 hours</p>
            </div>
            <div className="info-card contact-card-small">
              <div className="info-icon-wrapper">
                <div className="info-icon whatsapp-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 339.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56 81.2 56 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
              </div>
              <h3>WhatsApp</h3>
              <div className="info-details">
                <a href="https://wa.me/255756556768" target="_blank" rel="noopener noreferrer">
                  Chat with us
                </a>
              </div>
              <p className="info-note">Quick response via WhatsApp</p>
            </div>
            <div className="info-card contact-card-small">
              <div className="info-icon-wrapper">
                <div className="info-icon">📞</div>
              </div>
              <h3>Call Us</h3>
              <div className="info-details">
                <a href="tel:+255756556768">+255756556768</a>
                <a href="tel:+255650379646">+255650379646</a>
              </div>
              <p className="info-note">Mon-Fri: 9AM - 6PM EST</p>
            </div>
            <div className="info-card map-card">
              <h3>Find Us</h3>
              <div className="map-card-content">
                <div className="mini-map">
                  <iframe
                    src="https://www.google.com/maps?q=Mabibo+street,+Dar+es+Salaam,+Tanzania&output=embed"
                    width="100%"
                    height="280"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TSA Digital Solutions Location"
                  ></iframe>
                </div>
                <p className="map-address-text">Mabibo street, Dar es Salaam city, Tanzania</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Mabibo+street,+Dar+es+Salaam,+Tanzania" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-full-map-btn"
                >
                  View Full Map →
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Emma Julius"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="emma@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+255756556768"
                className={phoneError ? 'input-error' : ''}
              />
              {phoneError && <span className="error-message">{phoneError}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <div className="form-success">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

