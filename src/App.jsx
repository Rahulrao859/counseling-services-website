import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import CTAPrimary from './components/CTAPrimary'
import About from './components/About'
import Office from './components/Office'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Intro />
      <Services />
      <CTAPrimary />
      <About />
      <Office />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
