import "./index.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import React, { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  course: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(() => db.assignments.find(a => a._id === aid && a.course === cid));

  if (!assignment) {
    navigate(`/Kanbas/Courses/${cid}/Assignments`); 
    return null; 
  }

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, field: string) => {
    
    console.log(`Field: ${field}, New Value: ${event.target.value}`);
  };
  

  const saveChanges = () => {
    console.log('Changes saved!');
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const cancelChanges = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };


    return (
       
      <div id="wd-assignments-editor" className="container mt-3">
      <div className="assignment-form">

      <div className="row mb-3">
        <div className="col">

          <label htmlFor={`wd-name-${assignment._id}`} className="form-label">Assignment Name</label>
          <input id="wd-name" value={assignment.title} onChange={(e) => handleInputChange(e, 'title')} className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea id="wd-description" value={assignment.description} onChange={(e) => handleInputChange(e, 'description')} className="form-control" rows={10}></textarea>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input id="wd-points" value={assignment.points} onChange={(e) => handleInputChange(e, 'points')} className="form-control" />
        </div>
      
       

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
          <input id="wd-assign-to" value="Everyone" className="form-control" />
        </div>

        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
          <input type="datetime-local" id="wd-due-date" value={assignment.dueDate} onChange={(e) => handleInputChange(e, 'dueDate')} className="form-control" />
        </div>

      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
          <input type="datetime-local" id="wd-available-from" value={assignment.availableDate} onChange={(e) => handleInputChange(e, 'availableDate')} className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input type="datetime-local" id="wd-available-until" value={assignment.dueDate} onChange={(e) => handleInputChange(e, 'dueDate')} className="form-control" />
        </div>
      </div>
      </div>


      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2" onClick={cancelChanges}>Cancel</button>
        <button className="btn btn-success" onClick={saveChanges}>Save</button>
      </div>
    </div>
    </div>

  );}
  