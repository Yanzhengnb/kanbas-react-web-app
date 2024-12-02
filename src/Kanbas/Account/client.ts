import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
 const USERS_API = `${REMOTE_SERVER}/api/users`;

export const createCourse = async (course: any) => {
  console.log('createCourse/acc/client')
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};


export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
export const signup = async (user: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
  };
  export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
  };
  export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
  };
  export const profile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
  };
  export const findMyCourses = async () => {
    console.log('use API',USERS_API)
    console.log('find my courses/client.ts')
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
  };
  
  