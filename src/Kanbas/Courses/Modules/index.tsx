import { useParams } from "react-router";
import React, { useState } from "react";

import ModulesControls from "./ModulesControls"
import LessonControlButtons from "./LessonControlButtons"
import ModuleControlButtons from "./ModuleControlButtons"
import { BsGripVertical } from 'react-icons/bs';

import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { Module } from "./types";
import { Lesson} from "./types";

export default function Modules() {
  
  const { cid } = useParams();
  
  const [moduleName, setModuleName] = useState("");

  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  
  return (

      <div className="wd-modules">
        <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }}
        /><br /><br /><br /><br />

<ul id="wd-modules" className="list-group rounded-0">
{modules.filter((module: Module) => module.course === cid).map((module: Module) => (
          <li key={module._id} className="list-group-item p-3 mb-5 fs-5 border-solid">
            {!module.editing ? (
              
                  <span>
                  <BsGripVertical className="me-2 fs-3" />
                  {module.name}
                  </span>
            ) : (
              <input
                className="form-control w-50 d-inline-block"
                onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                onKeyDown={(e) => e.key === "Enter" && dispatch(updateModule({ ...module, editing: false }))}
                value={module.name}
              />
            )}
            <ModuleControlButtons
              moduleId={module._id}
              deleteModule={() => dispatch(deleteModule(module._id))}
              editModule={() => dispatch(editModule(module._id))}
            />
            
            <ul className="wd-lessons list-group rounded-0">
            {module.lessons && module.lessons.map((lesson) => (
                  <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
          
          </li>
          
                  ))}
                  
  </ul>
  </div>
  );}
             
