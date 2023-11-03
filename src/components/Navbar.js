import React from 'react';
import {
  Link
} from "react-router-dom";

const Navbar = ({mode,changeMode}) => {

  return (
    <nav className={`navbar navbar-expand-lg bg-${mode.backgroundColor}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${mode.color}`} to="/">Text-Master</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${mode.color}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${mode.color}`} to="/about">About</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={changeMode} checked={mode.backgroundColor === 'black'} />
            <label className={`form-check-label text-${mode.color}`} htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
