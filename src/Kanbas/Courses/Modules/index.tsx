import { useParams } from "react-router";
import * as db from "../../Database";

import ModulesControls from "./ModulesControls"
import LessonControlButtons from "./LessonControlButtons"
import ModuleControlButtons from "./ModuleControlButtons"
import { BsGripVertical } from 'react-icons/bs';

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((m) => m.course === cid);

  return (

  <div id="wd-modules" >
  <ModulesControls /><br /><br /><br /><br />

  
  <ul className="list-group rounded-0">
        {modules.map((module) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <span> {module.name} </span>
              <ModuleControlButtons />
            </div>

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
  