import React from 'react'
import './hero.css'
import Slider from './Slider'
import Intro from './Intro'

const Hero = () => {
  return (
    <>
      <div id='hero-section'>
        <Intro />
        <Slider className="slider" />
      </div>
    </>
  )
}

export default Hero