import Hero from '../components/Hero'
import TerminalEffect from '../components/TerminalEffect'
import './Home.css'

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <section className="terminal-section">
        <div className="terminal-section-container">
          <div className="terminal-section-content">
            <h2>Experience Our Development Process</h2>
            <p>Watch how we bring your ideas to life with cutting-edge technology</p>
          </div>
          <TerminalEffect />
        </div>
      </section>
    </div>
  )
}

export default Home

