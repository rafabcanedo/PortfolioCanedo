import React from 'react'

import Home from './Pages/Home'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Footer from './components/Footer'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
