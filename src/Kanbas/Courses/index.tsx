import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import NewAssignmentEditor from "./Assignments/AssignmentEditor";
import PeopleTable from "./People/Table";
import { courses } from "../Database";
import * as coursesClient from "./client";
import { FaAlignJustify } from "react-icons/fa6";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment } from "./Assignments/reducer";
export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
    const [assignment, setAssignment]=useState<any>({
  _id: "A100", title: "New Assignment", course: "RS101"});
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
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
