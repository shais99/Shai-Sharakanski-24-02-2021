import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`main-nav-container ${isDarkMode ? "dark" : ""}`}>
      <div className="container flex align-center space-between">
        <div className="logo-container">
          <Link className="flex align-center" to="/">
            <img src="/assets/img/icon.png" alt="Icon" />
            <h1>weAther</h1>
          </Link>
        </div>
        <div className="flex align-center">
          <ul className="main-nav clean-list flex align-center">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
          <div className="mode-toggle">
            <label className="switch">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};
