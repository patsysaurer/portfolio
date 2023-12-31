import React from 'react'
import './App.css'
import Social from './components/Social/Social'
import Hero from './components/Hero/Hero' 
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Extra from './components/Extra'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <>
      <Navbar />
      <Social />
      <Hero className="hero" />
      {/* <Skills />
      <About />
      <Projects />
      <Extra />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App