import { useState } from 'react'
import './Booking.css'

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
          <span className="section-badge">Schedule Now</span>
          <h2 className="section-title">Book a Consultation</h2>
          <p className="section-subtitle">
            Schedule a consultation period to discuss your project needs and timeline. 
            Our experts are ready to help transform your ideas into reality.
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
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
                placeholder="Enter your phone number"
              />
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
            {isSubmitting ? 'Processing...' : 'Continue to Payment'}
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

