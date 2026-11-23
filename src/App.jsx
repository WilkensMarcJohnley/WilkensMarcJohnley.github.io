import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Experience from './pages/Experience'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">

      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>

      <Footer />

    </div>
  )
}