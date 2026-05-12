import React from "react";
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Amaka's</div>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/products">products</NavLink></li>
        <li><NavLink to="/">NotFound</NavLink></li>


      </ul>
    </nav>

  );
}

export default Navbar;
