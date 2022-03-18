import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logoNav from '../assets/logoNav.png'

function NavBar() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand navbar-red bg-warning">
          <div className="container">
            <NavLink className="navbar-brand" to="/" ><img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={logoNav}  alt="trying" width="50" height="25"
            />
              Mascotas
            </NavLink>

            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/AboutUs">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Roadmap">
                    Roadmap
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Team">
                    Team
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
export default NavBar;

