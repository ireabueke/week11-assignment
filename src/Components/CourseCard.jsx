import React from "react";
import "./card-course.css";
import { Link } from "react-router";
import { courseDetails } from "../utils/routs";

function CourseCard({ title, category, duration, slug, id }) {
  return (
    <Link to={courseDetails(slug)} className="card">
      <div className="card__top">
        <h3
          className={`badge ${category === "Beginner" ? "badge-beginner" : "badge-intermediate"}`}
        >
          {category}
        </h3>
      </div>
      <p className="card-title">{title}</p>
      <p className="course-duration">{duration}</p>
      <p className="view-course">View course →</p>
    </Link>
  );
}

export default CourseCard;
