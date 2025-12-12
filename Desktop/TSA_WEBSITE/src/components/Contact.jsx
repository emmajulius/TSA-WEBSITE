import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
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
          <span className="section-badge">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to transform your ideas into digital success? Let's start a conversation. 
            We're here to help you achieve your goals.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
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
            <div className="info-card">
              <div className="info-icon-wrapper">
                <div className="info-icon">📞</div>
              </div>
              <h3>Call Us</h3>
              <div className="info-details">
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                <a href="tel:+15559876543">+1 (555) 987-6543</a>
              </div>
              <p className="info-note">Mon-Fri: 9AM - 6PM EST</p>
            </div>
            <div className="info-card">
              <div className="info-icon-wrapper">
                <div className="info-icon">📍</div>
              </div>
              <h3>Visit Us</h3>
              <div className="info-details">
                <p>123 Tech Street</p>
                <p>Digital City, DC 12345</p>
              </div>
              <p className="info-note">Schedule a visit in advance</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
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
                placeholder="john@example.com"
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
                placeholder="+1 (555) 123-4567"
              />
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

