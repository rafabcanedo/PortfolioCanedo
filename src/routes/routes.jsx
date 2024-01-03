import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Projects from '../Pages/Projects'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  )
}
