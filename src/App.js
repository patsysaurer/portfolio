import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Social from './components/Social'
import Hero from './components/Hero' 
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Extra from './components/Extra'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <div className='page-layout'>
      <Navigation />
      <Social />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Extra />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App