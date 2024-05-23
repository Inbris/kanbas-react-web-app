export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <p></p>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={45} rows={10}>
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
        
        <table>
            {/* Points, input */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />

            {/* AssignmentsGroup, selection */}
          <tr> 
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label> 
            </td>
            <td>
              <select id="wd-group">
                <option>Assignments</option>
              </select>
            </td>
          </tr>
          <br />

          {/* Display Grade as, selection */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
              </select>
            </td>
          </tr>
          <br />
          
          {/* Submission Type, selection */}
          <tr>
            
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
              </select>
              
              <p></p>
              {/* Online Entry Potions, nested table */}
          <tr>
          <td colSpan={2}>
            
              <legend>Online Entry Options</legend>
              <div>
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div>
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div>
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div>
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
              </div>
              <div>
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label>
              </div>
        
          </td>
        </tr>
            </td>
          </tr>
          <br />

          {/* Assign to, input */}
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign Assign to</label>
            </td>
            <td>
            <br />
                <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <br />

          {/* Due, date */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
            <br />

              <input type="date" id="wd-due-date" value="2024-05-13" />

            </td>
          </tr>
          <br />

          {/* Available from & Until, date */}
          <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <div>
              <input type="date" id="wd-available-from" value="2024-05-06" />
              <label htmlFor="wd-available-until" style={{ marginLeft: '10px' }}>Until</label>
              <input type="date" id="wd-available-until" value="2024-05-20" style={{ marginLeft: '10px' }} />
            </div>
          </td>
        </tr>

        </table>
        <br />
        <div style={{ textAlign: 'right' }}>
            <button>Cancel</button>
            <button>Save</button>
        </div>

      </div>
  );}
  