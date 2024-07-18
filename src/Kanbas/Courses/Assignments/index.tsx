import { FaSearch, FaPlus } from 'react-icons/fa';
import LessonControlButtons from './LessonControlButtons';
import AssignmentControlButtons from './AssignmentControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai';
import "./index.css";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { useSelector, useDispatch} from "react-redux";
import React, { useState, useEffect } from "react";
import { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment }  from "./reducer";

import * as client from "./client";


interface State {
  assignments: Assignment[]; 
}

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  course: string;
}

export default function Assignments() {

  const { cid } = useParams();
  const [assignmentsName, setAssignmentsName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // retrieving an assignment
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentforCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  // create an assignment (add)
  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
  };

  // delete an assignment
  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  // update or save an assignment
  const saveAssignment = async (assignment: any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };


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
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2" >
            <FaPlus className="me-1" />
            Group
          </button>

      
          <button type="button" id="wd-add-assignment" className="btn btn-danger me-2" onClick={() => {
            dispatch(addAssignment({ title: assignmentsName, course: cid }));
            setAssignmentsName(""); 
            navigate('/Kanbas/Courses/${cid}/Assignments/Editor'); 
          }}>
            <FaPlus className="me-1" />
            Add Assignment
          </button>


          

        </div>
      </div>

        <div className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center wd-title p-3 ps-2 bg-secondary">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <AssignmentControlButtons
            />
          </div>



          <ul id="wd-assignment-list" className="list-group">
          {assignments.map((assignment: Assignment) => (
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
              <LessonControlButtons 
              assignmentId={assignments._id}
              deleteAssignment={(assignmentId) => {
                removeAssignment(assignmentId);
              }}
              editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))} //...?
              
            
              />
            </div>
    
            </Link>
          </li>
          ))}        
      </ul>
    </div>
    </div>
  );}
  