import { NavLink } from "react-router-dom"

// css
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="headphones">Headphones</NavLink>
        <NavLink to="speakers">Speakers</NavLink>
        <NavLink to="earphones">Earphones</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar