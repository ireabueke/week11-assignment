import React from "react";
import "./style.css";
import { home } from "../../utils/routs";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Course not found</h2>
      <p>
        There's no course at this URL. The link might be wrong or the course may
        no longer exist.
        <button onClick={() => navigate(home)}>← Back to all courses</button>
      </p>
    </div>
  );
}

export default NotFound;
