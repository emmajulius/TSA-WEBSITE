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
                placeholder="+255756556768"
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

