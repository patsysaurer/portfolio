import React from 'react'
import './App.css'
import Social from './components/Social/Social'
import Hero from './components/Hero/Hero' 
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Extra from './components/Extra/Extra'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'



const App = () => {
  return (
    <>
    <div className='top-page'>
      <Navbar />
      <Social />
      <Hero className="hero" />
    </div>
      <Skills /> 
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer /> 
    </>
  )
}

export default App