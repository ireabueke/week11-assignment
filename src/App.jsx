import Home from "./pages/Home/Home";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Intermediate from "./pages/category/Intermediate";
import Beginner from "./pages/category/Beginner";
import { Routes, Route } from "react-router";
import { home, courseDetails, intermediate, beginner } from "./utils/routs";
import Nav from "./Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={intermediate} element={<Intermediate />} />
        <Route path={beginner} element={<Beginner />} />
        <Route path={courseDetails} element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;
