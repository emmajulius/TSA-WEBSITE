import { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced features and seamless user experience. Increased sales by 300% and improved conversion rates.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      results: '300% Sales Increase',
      image: '🛍️',
      color: '#2563eb'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions. Served 50K+ active users.',
      tech: ['React Native', 'Firebase', 'Stripe', 'Biometric Auth'],
      results: '50K+ Active Users',
      image: '💳',
      color: '#10b981'
    },
    {
      id: 4,
      title: 'Healthcare Management System',
      category: 'web',
      description: 'Comprehensive healthcare management platform for hospitals and clinics. Streamlined operations for 100+ facilities.',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'HL7'],
      results: '100+ Facilities',
      image: '🏥',
      color: '#8b5cf6'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Cross-platform fitness app with AI-powered workout recommendations. Achieved 4.8+ star rating with 100K+ downloads.',
      tech: ['Flutter', 'TensorFlow', 'GraphQL', 'Firebase'],
      results: '100K+ Downloads',
      image: '💪',
      color: '#ef4444'
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Analytics dashboard for SaaS companies with real-time data visualization. Improved decision-making for 500+ businesses.',
      tech: ['React', 'D3.js', 'Node.js', 'WebSocket'],
      results: '500+ Businesses',
      image: '📊',
      color: '#06b6d4'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-header">
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Showcasing our successful projects and the innovative solutions we've delivered. 
            Each project represents our commitment to excellence and client success.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span>{filter.label}</span>
              <span className="filter-count">({filter.count})</span>
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="portfolio-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ '--project-color': project.color }}
            >
              <div className="portfolio-image">
                <div className="image-placeholder">{project.image}</div>
                <div className="portfolio-overlay">
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="portfolio-card-header">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <span className="portfolio-category">{project.category}</span>
                </div>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-results">
                  <span className="results-icon">📈</span>
                  <span className="results-text">{project.results}</span>
                </div>
                <div className="portfolio-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio

