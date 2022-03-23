import React from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../../../assets/logoNav.png";

import classes from "./NavBar.module.css";

function NavBar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView();
  };
  return (
    <div className={classes.Navbar}>
      <nav className="navbar navbar-expand">
        <div className="container">
          <NavLink className={classes.logoContainer} to="/">
            <img src={logoNav} alt="trying" width="50" height="25" />
            <p className={classes.name}>Mascotas</p>
          </NavLink>

          <div className={classes.links}>
            <ul>
              <li className="nav-item">
                <p className="nav-link" onClick={() => scrollToSection("home")}>
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link"
                  onClick={() => scrollToSection("about-us")}
                >
                  About
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link"
                  onClick={() => scrollToSection("roadmap")}
                >
                  Roadmap
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={() => scrollToSection("team")}>
                  Team
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
