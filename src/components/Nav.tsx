import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="col-sm-10">
        <h4 className="ps-3">mi_ne movement</h4>
      </div>

      <div className="col-sm-2 pe-3">
        <ul>
          <Link className="nav-links" to="/">
            <li>home</li>
          </Link>
          <Link className="nav-links" to="/projects">
            <li>projects</li>
          </Link>
          <Link className="nav-links" to="/about">
            <li>about</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
