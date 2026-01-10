import React from 'react'
import './Hero.css'
import prof_img from '../../../assets/profile.jpeg'

const Hero = () => {
  const scrollToContact = () => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero">
      <img src={prof_img} alt="Profile" />

      <h1>
        <span>I'm Nandhana K,</span> Full Stack Developer
      </h1>

      <div className="hero-action">
        <button className="hero-connect" onClick={scrollToContact}>
          Connect With Me
        </button>

        <a href="/NANDHANA K.pdf" download className="hero-resume">
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
