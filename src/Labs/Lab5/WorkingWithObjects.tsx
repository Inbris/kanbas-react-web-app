import React, { useState, useEffect } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, 
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", 

        completed: false, 
        score: 0,
      });
      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`


    // module
      const [module, setModule] = useState({
        id: 'module1',
        name: 'NodeJS Basics',
        description: 'Introduction to Node.js',
        course: 'Node.js'
    });

    const fetchModule = () => {
        fetch(`${process.env.REACT_APP_REMOTE_SERVER}/labs5/module`)
            .then(response => response.json())
            .then(data => setModule(data));
    };


    const updateModuleName = (newName: string) => {
        fetch(`${process.env.REACT_APP_REMOTE_SERVER}/lab5/module/name`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newName })
        })
        .then(response => response.json())
        .then(updatedName => {
            setModule(prev => ({ ...prev, name: updatedName }));
        });
    };


// UI elements
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />


      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>

      <div>
            <button onClick={fetchModule}>Get Module</button>
            <button onClick={() => updateModuleName('New Module Name')}>Update Module Name</button>
            <input type="text" value={module.name} onChange={e => updateModuleName(e.target.value)} />
            <input type="text" value={module.description} onChange={e => updateModuleName(e.target.value)} />

            {/* UI for assignment score and completed status */}
            <input type="number" value={assignment.score} onChange={e => setAssignment(prev => ({ ...prev, score: parseInt(e.target.value) }))} />
            <input type="checkbox" checked={assignment.completed} onChange={e => setAssignment(prev => ({ ...prev, completed: e.target.checked }))} />
        </div>

    </div>
);}

