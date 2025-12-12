import { useState, useEffect } from 'react'
import './TechStack.css'

const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const techStack = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'Kubernetes', icon: '☸️', color: '#326CE5' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
    { name: 'Vue.js', icon: '💚', color: '#4FC08D' },
    { name: 'Flutter', icon: '💙', color: '#02569B' },
    { name: 'GraphQL', icon: '🔷', color: '#E10098' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [techStack.length])

  return (
    <section className="tech-stack">
      <div className="tech-stack-container">
        <div className="section-header">
          <span className="section-badge">Our Expertise</span>
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle">
            We work with cutting-edge technologies to deliver modern, scalable solutions
          </p>
        </div>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className={`tech-item ${index === currentIndex ? 'active' : ''}`}
              style={{ '--tech-color': tech.color }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack


