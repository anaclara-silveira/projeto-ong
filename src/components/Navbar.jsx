import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

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
      <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/projetos" onClick={() => setMenuOpen(false)}>Projetos</Link>
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

