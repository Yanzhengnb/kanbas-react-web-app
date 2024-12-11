import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const createAssignment = async ( assignment: any) => {
  const response = await axios.post(`${MODULES_API}/assignments`, assignment);
  return response.data;
};

export const findAssignmentsForModule = async (moduleId: string) => {
  const response = await axios.get(`${MODULES_API}/${moduleId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  console.log("delete deleteAssignment")
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  console.log(response)
  return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};
export const fetchAllCourses = async () => {
const { data } = await axiosWithCredentials.get(COURSES_API);
return data;
};