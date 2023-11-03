import React from 'react'
import './App.css' 
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Tools from './components/Tools'



const App = () => {
  return (
    <>
    <div className='flex-position'>
      <h1>Patsy Saurer</h1>
      <h2>Full-Stack Developer</h2>
      <Projects />
      <div className='flex-col'>
        <Tools />
        <AboutMe />
        <Contact />
      </div>
    </div>
    </>
  )
}

export default App