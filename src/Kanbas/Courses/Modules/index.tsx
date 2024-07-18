import { useParams } from "react-router";
import React, { useState, useEffect } from "react";

import ModulesControls from "./ModulesControls"
import LessonControlButtons from "./LessonControlButtons"
import ModuleControlButtons from "./ModuleControlButtons"
import { BsGripVertical } from 'react-icons/bs';

import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import * as client from "./client";

import { useSelector, useDispatch } from "react-redux";
import { Module } from "./types";
import { Lesson} from "./types";

export default function Modules() {
  
  const { cid } = useParams();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();
  
  // retrieving a module
  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  // create a module (add)
  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  };

  // delete a module
  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  // update or save a module
  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };




  // UI elements
  return (

      <div className="wd-modules">
        <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
          addModule={() => {
            createModule({ name: moduleName, course: cid });
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
                onChange={(e) => saveModule({ ...module, name: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveModule({ ...module, editing: false });
                  }
                }}
              />
            )}
            
            <ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => { removeModule(moduleId); }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />
            
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
             
