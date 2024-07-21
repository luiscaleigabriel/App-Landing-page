import { useState } from "react"

export default function NavBar() {
  const [nav, setNav] = useState(false)
  const changeBackgrond = () => {
    if(window.scrollY >= 50) {
      setNav(true)
    }else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeBackgrond)

  return (
    <nav className={ nav ? 'nav active' : 'nav' }>
      <a href="#" className="logo">
        <img src="/images/logo.png" alt="AppLand" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a className="active" href="#">Home</a>
        </li>
        <li>
          <a href="#">Aplicações</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">UI SS</a>
        </li>
        <li>
          <a href="#">Download</a>
        </li>
      </ul>
    </nav>
  )
}