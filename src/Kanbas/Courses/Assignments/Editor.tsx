import "./index.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import React, { ChangeEvent } from 'react';


export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const assignment = db.assignments.find(a => a._id === aid && a.course === cid);

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
      
       {/*
        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select id="wd-group" className="form-control">
            <option>Assignments</option>
          </select>
        </div>
      </div>
    *
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          <select id="wd-display-grade-as" className="form-control">
            <option>Percentage</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select id="wd-submission-type" className="form-control">
            <option>Online</option>
          </select>
        </div>
      </div>
      <fieldset className="mb-3">
        <legend className="fs-6">Online Entry Options</legend>
        <div className="form-check">
          <input type="checkbox" id="wd-text-entry" className="form-check-input" />
          <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-website-url" className="form-check-input" />
          <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
          <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
          <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-file-upload" className="form-check-input" />
          <label htmlFor="wd-file-upload" className="form-check-label">File Upload</label>
    </div> 
      </fieldset>
      */}

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
  