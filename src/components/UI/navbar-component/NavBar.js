import React from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../../../assets/logoNav.png";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={classes.Navbar}>
      <nav className="navbar navbar-expand">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={logoNav}
              alt="trying"
              width="50"
              height="25"
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
