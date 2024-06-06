import { FaSearch, FaPlus } from 'react-icons/fa';
import LessonControlButtons from './LessonControlButtons';
import AssignmentControlButtons from './AssignmentControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai';
import "./index.css";


export default function Assignments() {
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
          {/* A1 */}
          <li className="wd-assignment-list-item list-group-item p-3 mb-0 border-0 border-start border-5 border-success rounded-0">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <AiOutlineFileText className="me-2 fs-3 text-success" />
                <div>
                  <a className="wd-assignment-link fw-bold text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                    A1
                  </a>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am | <br /> Due May 13 at 11:59pm | 100 pts</div>
                </div>
              </div>
              <LessonControlButtons />
            </div>
          </li>
        
        {/* A2 */}
        <li className="wd-assignment-list-item list-group-item p-3 mb-0 border-0 border-start border-5 border-success rounded-0">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <AiOutlineFileText className="me-2 fs-3 text-success" />
                <div>
                  <a className="wd-assignment-link fw-bold text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Assignments/124">
                    A2
                  </a>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | Not available until May 13 at 12:00am | <br /> Due May 20 at 11:59pm | 100 pts</div>
                </div>
              </div>
              <LessonControlButtons />
            </div>
          </li>

        {/* A3 */}
        <li className="wd-assignment-list-item list-group-item p-3 mb-0 border-0 border-start border-5 border-success rounded-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <AiOutlineFileText className="me-2 fs-3 text-success" />
              <div>
                <a className="wd-assignment-link fw-bold text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Assignments/125">
                  A3
                </a>
                <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | Not available until May 20 at 12:00am | <br /> Due May 27 at 11:59pm | 100 pts</div>
              </div>
            </div>
            <LessonControlButtons />
          </div>
        </li>
      </ul>
    </div>
    </div>
  );}
  