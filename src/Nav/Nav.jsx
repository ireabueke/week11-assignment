import React from "react";
import { Link } from "react-router";
import "./nav.css";
import { home, intermediate, beginner } from "../utils/routs";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="nav-link" to={home}>
            <span className="logo">TJ</span>Courses
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={beginner}>
            Beginner
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={intermediate}>
            Intermediate
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
