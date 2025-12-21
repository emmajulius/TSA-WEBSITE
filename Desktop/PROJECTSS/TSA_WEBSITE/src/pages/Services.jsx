import { useEffect } from 'react'
import Services from '../components/Services'
import Booking from '../components/Booking'

const ServicesPage = () => {
  useEffect(() => {
    // Handle hash scrolling on page load
    if (window.location.hash === '#booking') {
      setTimeout(() => {
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
      }, 100)
    }
  }, [])

  return (
    <div className="page-services">
      <Services />
      <Booking />
    </div>
  )
}

export default ServicesPage


