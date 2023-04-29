import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Badge from "react-bootstrap/Badge";

function NavBar({ dark, setDark }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav
        className="navbar"
        style={{ backgroundColor: dark ? "rgb(21,21,21)" : "#fff" }}
      >
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            CodersVault
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                // exact
                // to="/learn"
                // activeClassName="active"
                // className="nav-links"
                // onClick={handleClick}
                href="https://codersvault-algovine.netlify.app/"
                style={{ color: dark ? "#fff" : "#000" }}
              >
                Learn
              </a>
            </li>
            <li className="nav-item">
              <a
                // exact
                // to="/learn"
                // activeClassName="active"
                // className="nav-links"
                // onClick={handleClick}
                href="https://whimsical.com/dsa-in-90-days-EmPkf5utoFGRMnRqJjM6YV"
                style={{ color: dark ? "#fff" : "#000" }}
              >
                DSA-Sprint
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                style={{ color: dark ? "#fff" : "#000" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                // exact
                // to="/blog"
                // activeClassName="active"
                // className="nav-links"
                // onClick={handleClick}
                href="https://github.com/KumarPiyush852002/CodersVault"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: dark ? "#fff" : "#000" }}
              >
                Github
              </a>
            </li>
            <li className="nav-item">
              <Badge
                pill
                variant={dark ? "light" : "dark"}
                className="hvr-grow"
                onClick={() => {
                  setDark(!dark);
                  window.localStorage["isDark"] = !dark;
                }}
                style={{ cursor: "pointer" }}
              >
                {dark ? (
                  <span role="img" aria-label="sun-emoji" className="emojiFix">
                    ☀️
                  </span>
                ) : (
                  <span role="img" aria-label="moon-emoji" className="emojiFix">
                    🌙
                  </span>
                )}
              </Badge>{" "}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
