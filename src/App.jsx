import React from 'react'

import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
