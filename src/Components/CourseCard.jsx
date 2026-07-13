import React from "react";
import "./card-course.css";

function CourseCard({ title, category, duration }) {
  return (
    <div className="card">
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
    </div>
  );
}

export default CourseCard;
