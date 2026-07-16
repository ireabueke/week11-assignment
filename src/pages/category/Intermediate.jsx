import React from "react";
import "./category.css";
import { courses } from "../../data/courses";
import CourseCard from "../../Components/CourseCard";

function Intermediate() {
  let data = courses.filter((course) => course.category === "Intermediate");

  return (
    <div className="cardContainer">
      <div className="course-list">
        {data.map((course) => {
          return (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              duration={course.duration}
              slug={course.slug}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Intermediate;
