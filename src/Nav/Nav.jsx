import React from "react";
import { NavLink } from "react-router";
import "./nav.css";
import { home, intermediate, beginner } from "../utils/routs";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="nav-link" to={home} end>
            <span className="logo">TJ</span>Courses
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={beginner}>
            Beginner
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={intermediate}>
            Intermediate
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
