import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

// retrieving a module
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

// create a module
export const createModule = async (courseId: string, module: any) => {
  const response = await axios.post( `${COURSES_API}/${courseId}/modules`, module );
  return response.data;
}

// delete a module
export const deleteModule = async (moduleId: string) => {
  const response = await axios
    .delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

// update a module
export const updateModule = async (module: any) => {
  const response = await axios.
    put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};

