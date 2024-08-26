import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100 fixed-top">
      <Link className="navbar-brand text-primary" to="/">OTT Platform</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/movielist">Movies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/myplan">My Plan</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-link nav-link text-light" to="/subscribe">Subscription</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/register">Change Password</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
