import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  
  return (
    <nav className="navbar">
      <p>Hello! Welcome to Get Social!</p>
      <div className="navigation-links">
        <Link to="/">HOME</Link>
        <Link to="/profile">PROFILE</Link>
        <Link to="/notifications">NOTIFICATIONS</Link>
      </div>
      <input type="text" placeholder="Search..." className="search-bar" />
    </nav>
  );
}

export default NavBar;