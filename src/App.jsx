import React from 'react'
import { Navbar } from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </>
  )
}

export default App
