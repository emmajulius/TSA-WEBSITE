import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const navigate = useNavigate()
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      title: 'Web Development',
      icon: '🌐',
      description: 'Custom web applications built with modern frameworks and best practices for optimal performance and user experience.',
      features: ['React & Vue.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimization', 'Progressive Web Apps', 'API Integration'],
      benefits: 'Scalable, fast, and secure web solutions',
      color: '#2563eb'
    },
    {
      title: 'Mobile App Development',
      icon: '📱',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'App Store Optimization', 'Push Notifications'],
      benefits: 'Native performance with cross-platform efficiency',
      color: '#10b981'
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Beautiful, intuitive user interfaces designed with user experience at the forefront of every decision.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing', 'Brand Identity'],
      benefits: 'Engaging designs that convert visitors to customers',
      color: '#8b5cf6'
    },
    {
      title: 'Graphic Design',
      icon: '✏️',
      description: 'Creative visual designs that capture your brand essence and communicate your message effectively to your audience.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Marketing Materials', 'Social Media Graphics', 'Packaging Design'],
      benefits: 'Compelling visuals that strengthen your brand presence',
      color: '#f97316'
    },
    {
      title: 'E-Commerce Solutions',
      icon: '🛒',
      description: 'Complete e-commerce platforms that drive sales and provide exceptional shopping experiences for your customers.',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Analytics', 'Multi-vendor Support', 'Mobile Commerce'],
      benefits: 'Increase sales with optimized shopping experiences',
      color: '#ef4444'
    },
    {
      title: 'Consulting & Strategy',
      icon: '💼',
      description: 'Expert technology consulting to help you make informed decisions and develop effective digital strategies.',
      features: ['Tech Assessment', 'Digital Strategy', 'Architecture Design', 'Best Practices', 'Code Review', 'Performance Optimization'],
      benefits: 'Strategic guidance for digital transformation',
      color: '#06b6d4'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions tailored to meet your business needs and drive growth. 
            From concept to deployment, we provide end-to-end services that deliver results.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ '--service-color': service.color }}
            >
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="service-benefits">
                <span className="benefits-icon">✨</span>
                <span>{service.benefits}</span>
              </div>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-footer">
                <button 
                  className="service-btn"
                  onClick={() => navigate('/contact')}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Get Started?</h3>
            <p>Let's discuss how we can help transform your business with our expert services.</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => {
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
                }}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

