import React from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../../../assets/logoNav.png";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={classes.Navbar}>
      <nav className="navbar navbar-expand">
        <div className="container">
         
          <NavLink className={classes.logoContainer} to="/">
            <img
              src={logoNav}
              alt="trying"
              width="50"
              height="25"
            />
            <p className={classes.name}>Mascotas</p>
          </NavLink>

          <div className={classes.links}>
            <ul >
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
