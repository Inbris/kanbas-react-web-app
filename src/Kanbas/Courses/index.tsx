import { courses } from "../Database";
import CoursesNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments";
import Grades from "./Grades";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from 'react-icons/fa';



export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();


  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}  &gt; {pathname.split("/")[4]}

      </h2>

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">

            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="/Kanbas/Courses/:cid/Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
        </div>
      </div>
    </div>
);}

  