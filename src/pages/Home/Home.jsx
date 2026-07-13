import React from "react";
import "./home.css";
import { courses } from "../../data/courses";
import CourseCard from "../../Components/CourseCard";

function Home() {
  return (
    <main>
      <div className="hero">
        <p className="hero-eyebrow">TechyJaunt Cohort 8</p>
        <h1 className="hero-title">
          Learn at your
          <br />
          own pace.
        </h1>

        <p className="hero-subtitle">
          Everything from HTML basics to advanced React patterns — structured,
          practical, and beginner-friendly.
        </p>
      </div>
      <div className="course-list">
        {courses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              duration={course.duration}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Home;
