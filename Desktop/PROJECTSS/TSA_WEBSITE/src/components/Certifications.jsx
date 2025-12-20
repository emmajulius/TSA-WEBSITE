import './Certifications.css'

const Certifications = () => {
  const certifications = [
    { name: 'React Certified', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js Expert', icon: '🟢', color: '#339933' },
    { name: 'Security+', icon: '🔒', color: '#00A8E8' }
  ]

  return (
    <section className="certifications">
      <div className="certifications-container">
        <div className="section-header">
          <span className="section-badge">Certified Excellence</span>
          <h2 className="section-title">Certifications & Partnerships</h2>
          <p className="section-subtitle">
            Our team holds industry-leading certifications and partnerships with major technology providers
          </p>
        </div>
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="cert-item"
              style={{ '--cert-color': cert.color }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-badge">✓ Certified</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications


