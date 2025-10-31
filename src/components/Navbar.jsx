import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>ONG Doce Lar</h1>
      </div>
      <input 
        type="checkbox" 
        id="menu-toggle" 
        className="menu-toggle"
        checked={menuOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-toggle" className="hamburguer">
        &#9776;
      </label>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        title={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      >
        {theme === 'light' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        )}
      </button>
      <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Página Inicial</Link>
        <Link to="/projetos" onClick={() => setMenuOpen(false)}>Projetos</Link>
        <Link to="/cadastro" onClick={() => setMenuOpen(false)}>Seja um voluntário</Link>
        <div 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a id="botao" href="#">Fale Conosco</a>
          <div className={`drop-menu ${dropdownOpen ? 'show' : ''}`}>
            <a href="#email">Email</a>
            <a href="#endereco">Endereço</a>
            <a href="#telefone">Telefone</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

