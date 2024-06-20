import { FaSearch, FaPlus } from 'react-icons/fa';
import LessonControlButtons from './LessonControlButtons';
import AssignmentControlButtons from './AssignmentControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai';
import "./index.css";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();

  const assignments = db.assignments.filter((a: { _id: string; course: string }) => a.course === cid);

  
    return (
      <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch className="text-secondary" />
          </span>
          <input 
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search..."
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            <FaPlus className="me-1" />
            Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-1" />
            Assignment
          </button>
        </div>
      </div>

        <div className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center wd-title p-3 ps-2 bg-secondary">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <AssignmentControlButtons />
          </div>



          <ul id="wd-assignment-list" className="list-group">
          {assignments.map((assignment) => (
          <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 mb-0 border-0 border-start border-5 border-success rounded-0">
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link fw-bold text-decoration-none text-dark">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <AiOutlineFileText className="me-2 fs-3 text-success" />
                <div>
                  <div>{assignment.title}</div>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | Not available until {new Date(assignment.availableDate).toLocaleDateString()} at {new Date(assignment.availableDate).toLocaleTimeString()}
                     | <br /> Due {new Date(assignment.dueDate).toLocaleDateString()} at {new Date(assignment.dueDate).toLocaleTimeString()} 
                     | {assignment.points} pts
                     </div>
                </div>
              </div>
              <LessonControlButtons />
            </div>
            </Link>
          </li>
          ))}        
      </ul>
    </div>
    </div>
  );}
  