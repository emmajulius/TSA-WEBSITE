import { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import './Home.css'

const Home = () => {
  useEffect(() => {
    // Handle hash scrolling on page load
    if (window.location.hash === '#about') {
      setTimeout(() => {
        const aboutSection = document.getElementById('about')
        if (aboutSection) {
          const headerOffset = 80
          const elementPosition = aboutSection.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="page-home">
      <Hero />
      <About />
    </div>
  )
}

export default Home

