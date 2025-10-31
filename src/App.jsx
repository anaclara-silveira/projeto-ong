import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Cadastro from './pages/Cadastro'
import WhatsAppFloat from './components/WhatsAppFloat'
import './App.css'

function App() {
  return (
    <ThemeProvider>
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
    </ThemeProvider>
  )
}

export default App

