import { useState, useEffect, useRef } from 'react'
import { isValidPhoneNumber } from 'libphonenumber-js'
import './Booking.css'

const Booking = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: ''
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

    // Observe form sections
    if (formRef.current) {
      const formSections = formRef.current.querySelectorAll('.form-section')
      Array.from(formSections).forEach((section, index) => {
        section.style.animationDelay = `${index * 0.15}s`
        observer.observe(section)
      })
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

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
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
      setFormData({ 
        fullName: '', 
        email: '', 
        phone: '', 
        checkInDate: '', 
        checkOutDate: '' 
      })
      setPhoneError('')
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="booking" className="booking">
      <div className="booking-container">
        <div className="section-header">
          <h2 className="section-title">Book a Consultation</h2>
          <p className="section-subtitle">
            Schedule a consultation period to discuss your project needs and timeline. 
            Our experts are ready to help transform your ideas into reality.
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit} ref={formRef}>
          <div className="form-section">
            <h3 className="form-section-title">Your Information</h3>
            
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
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
          </div>

          <div className="form-section">
            <h3 className="form-section-title">Consultation Period</h3>
            
            <div className="date-inputs-row">
              <div className="form-group date-group">
                <label htmlFor="checkInDate">
                  <span className="label-icon">📅</span>
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
                {formData.checkInDate && (
                  <span className="date-display">dd/mm/yyyy: {formatDate(formData.checkInDate)}</span>
                )}
              </div>

              <div className="form-group date-group">
                <label htmlFor="checkOutDate">
                  <span className="label-icon">📅</span>
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  required
                  min={formData.checkInDate || new Date().toISOString().split('T')[0]}
                />
                {formData.checkOutDate && (
                  <span className="date-display">dd/mm/yyyy: {formatDate(formData.checkOutDate)}</span>
                )}
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary continue-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Submit Booking Request'}
          </button>

          {submitStatus === 'success' && (
            <div className="form-success">
              Your consultation booking has been submitted successfully! We'll contact you shortly to confirm.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Booking

