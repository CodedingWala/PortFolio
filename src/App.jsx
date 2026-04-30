import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import Project from './section/Project'
import About from './section/About'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Experience from './section/Experience'

const App = () => {
  return (
    <main className='w-full max-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App