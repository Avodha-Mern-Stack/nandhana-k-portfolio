import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/navbar/Hero/Hero'
import About from './components/navbar/About/About'
import Services from './components/Services/Services'
import MyWork from './components/Mywork/Mywork'
import Contact from './components/contact/contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      
    </div>
  )
}

export default App
