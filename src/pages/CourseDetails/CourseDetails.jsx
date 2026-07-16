import React from "react";
import { useParams } from "react-router";
import { courses } from "../../data/courses";
import "./courseDetails.css";
import { useNavigate } from "react-router";

function CourseDetails() {
  const param = useParams();
  const { slug } = param;
  const navigate = useNavigate();
  const course = courses.find((courseId) => courseId.slug == slug);

  return (
    <div className="detailsContainer">
      <button onClick={() => navigate(-1)} className="btn">
        ← Back
      </button>
      <div>
        <p className="category">{course.category}</p>
      </div>
      <h1 className="title">{course.title}</h1>
      <p className="duration">⏱{course.duration}</p>
      <p className="description">{course.description}</p>
      <h2 className="topics-title">TOPICS COVERED</h2>
      <ul className="topic-container">
        {course.topics.map((topic, index) => (
          <li className="topic" key={index}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
