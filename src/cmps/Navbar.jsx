import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="main-nav-container">
      <div className="container flex align-center space-between">
        <div className="logo-container">
          <Link className="flex align-center" to="/">
            <img src="/assets/img/icon.png" alt="Icon" />
            <h1>weAther</h1>
          </Link>
        </div>
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
      </div>
    </header>
  );
};
