// import React from 'react'
import "./NavBar.css";
import logo from "../assets/img/wayne-logo2.png";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>

        <div
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="hamburger-icon"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="offset-navbar"></div>
    </div>
  );
};

export default NavBar;
