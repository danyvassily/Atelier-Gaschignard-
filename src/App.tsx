import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import LeChef from './pages/LeChef'
import Services from './pages/Services'
import Photos from './pages/Photos'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/le-chef" element={<LeChef />} />
          <Route path="/services" element={<Services />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

