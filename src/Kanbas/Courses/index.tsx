import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import NewAssignmentEditor from "./Assignments/AssignmentEditor";
import CoursePeople from "./People/Table";
import { setPeople } from "./People/reduce";
import * as coursesClient from "./client";
import * as usersClient from "../Account/client";

import { FaAlignJustify } from "react-icons/fa6";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment } from "./Assignments/reducer";
import Quiz from "./quiz";
export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [assignments, setAssignments] = useState<any[]>([]);
  const [assignmentName,] = useState("");
  const Addassignment = async () => {
    if (!cid) return;
    const newAssignment = { name: assignmentName, course: cid };
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    setAssignments([ ... assignments,newAssignment])
    dispatch(addAssignment(assignment));
  };
  const [users, setUsers] = useState<any[]>([]);
  const findUsersForCourse = async() =>{
    try{
      const users =await coursesClient.findUsersForCourse(course._id);
      setUsers(users);}
      catch(error){
        console.error(error);
      }
    };
  

  const fetchUsers = async () => {
    try{    
      const filtereduUsers = await coursesClient.findUsersForCourse(course._id);
      const allUsers = await usersClient.fetchAllUsers();
      const users = allUsers.map((user:any) => {
        if (filtereduUsers.find((c: any) => c._id === user._id)) {
          console.log("filtereduser",user._id)

          return { ...user._id };
        } else {
          console.log("filtereduser",user._id)

          return users;
        }
      });
      setUsers(users);
   } catch (error) {
     console.error(error);

    }
  };
  useEffect(() => {
    if (cid) {
      fetchUsers();
    }
  }, [cid]);



  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}&gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="row">
        <div className="col-md-2 d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="col-md-8 flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Assignments/NewAssignmentEditor" element={<NewAssignmentEditor />}/>
            <Route path="People" element={<CoursePeople />} />
            <Route path="Quizzes" element={<Quiz />} />
    
          </Routes>
        </div>
      </div>
    </div>
  );
}
