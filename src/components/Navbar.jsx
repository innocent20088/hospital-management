import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">St. Luke Hospital</h2>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Dashboard</NavLink></li>
        <li><NavLink to="/patients">Patients</NavLink></li>
        <li><NavLink to="/appointments">Appointments</NavLink></li>
        <li><NavLink to="/billing">Billing</NavLink></li>
        <li><NavLink to="/pharmacy">Pharmacy</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
