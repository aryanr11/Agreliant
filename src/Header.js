import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/img/LogoWhite.png';

const Header = () => {
  return (
    <header className="bg_gray sticky">
      <div className="container">
        <nav className="py-0 navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"><img src={logo} className="logo_css" alt="Logo" /></NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="nav_menu navbar-nav">
                <li><NavLink to="/research" className={({ isActive }) => (isActive ? 'active' : '')}>RESEARCH</NavLink></li>
                <li><NavLink to="/production" className={({ isActive }) => (isActive ? 'active' : '')}>PRODUCTION</NavLink></li>
                <li><NavLink to="/quality" className={({ isActive }) => (isActive ? 'active' : '')}>QUALITY</NavLink></li>
                <li><NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>PRODUCTS</NavLink></li>
                <li><NavLink to="/aboutus" className={({ isActive }) => (isActive ? 'active' : '')}>ABOUT US</NavLink></li>
              </ul>
              <div className="btn btn_yellow justify-content-center d-flex">
                <NavLink to="/careers" className={({ isActive }) => (isActive ? 'active' : '')}>CAREERS</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
