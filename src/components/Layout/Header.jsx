import { useState } from "react";
import { NavLink } from "react-router-dom";


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "#eaa636" : "white",
  });

  return (
    <>
      <header className="section-navbar">
        <div className="container">
          <nav className="navbar">
            {/* Logo */}
            <div className="navbar-brand">
              <NavLink to="/" className="nav-linked">
              
                Baking Delights
              </NavLink>
            </div>

            {/* Toggle Button */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>

            {/* Navigation Menu */}
            <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" style={getNavLinkStyle} onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="about" className="nav-link" style={getNavLinkStyle} onClick={() => setMenuOpen(false)}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="service" className="nav-link" style={getNavLinkStyle} onClick={() => setMenuOpen(false)}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contact" className="nav-link" style={getNavLinkStyle} onClick={() => setMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
