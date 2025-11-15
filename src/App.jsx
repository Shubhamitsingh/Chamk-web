import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Download from './pages/Download'
import Contact from './pages/Contact'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Guidelines from './pages/Guidelines'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/guidelines" element={<Guidelines />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

