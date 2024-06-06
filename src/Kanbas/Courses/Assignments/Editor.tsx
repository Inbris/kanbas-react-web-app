import "./index.css";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="container mt-3">
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea id="wd-description" className="form-control" rows={10}>
            The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
          </textarea>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input id="wd-points" value={100} className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select id="wd-group" className="form-control">
            <option>Assignments</option>
          </select>
        </div>
      </div>
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
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
          <input id="wd-assign-to" value="Everyone" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
          <input type="datetime-local" id="wd-due-date" value="2024-05-13T23:59" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
          <input type="datetime-local" id="wd-available-from" value="2024-05-06T00:00" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input type="datetime-local" id="wd-available-until" value="2024-05-20T00:00" className="form-control" />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success">Save</button>
      </div>
    </div>
  );}
  