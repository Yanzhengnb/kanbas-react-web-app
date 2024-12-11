import { BsGripVertical } from 'react-icons/bs';
import { IoMdArrowDropdown } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as coursesClient from "../client";
import { useSelector, useDispatch } from "react-redux";
import Facultyonly from "../../Account/Facultyonly";
import GreenCheckmark from "./GreenMark";
import { addAssignment,deleteAssignment,updateAssignment,editAssignment } from "./reducer";
import { FaPlus, FaSearch } from "react-icons/fa";
import * as assignmentsClient from "./client"
export default function Assignments() {
    const { cid } = useParams(); 
    const dispatch = useDispatch();
    const [assignmentName, setAssignmentName] = useState("");
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const saveModule = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
      };    const removeAssignment = async (assignmentId: string)=>{
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };
    const Addassignment = async () => {
        if (!cid) return;
        const newAssignment = { name: assignmentName, course: cid };
        const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(assignment));
      };
      

    return (
        <div id="wd-assignments">
            
            <Facultyonly>
            
                         <Link
                                            className="wd-assignment-link fw-bold"
                                            to={`/Kanbas/Courses/${cid}/Assignments/NewAssignmentEditor`}
                                            style={{ color: 'black', textDecoration: 'none' }}
                >
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me float-end " >
    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
    Assignment
  </button> </Link>    
                        
            <div id="wd-modules-controls" className="text-nowrap">
                
      <div className="d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary "
          type="button" >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />

          Group</button>
        </div>
        <div id="wd-modules-controls" className="d-flex align-items-center text-nowrap mb-4">
            <div className="position-relative me-2">
                <input 
                    type="text" 
                    placeholder="Search ..." 
                    className="form-control" 
                    style={{
                        paddingLeft: '30px',
                        height: '50px' 
                    }}
                />
                <FaSearch className="position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            </div>
            </div>
            </Facultyonly>

            <ul id="wd-modules" className="list-group rounded-0">
                
            
                <ul id="wd-assignment" className="list-group rounded-0">
                <div className=" p-3 ps-1 bg-secondary">
                <h3 id="wd-assignments-title" className="mb-4 d-flex justify-content-between align-items-center">
                    
                    <div>
                        <BsGripVertical className="me-2 fs-3" />
                        <IoMdArrowDropdown />
                        ASSIGNMENTS
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-secondary ms-2" style={{ borderRadius: '20px' }}>40% of Total</button>
                        <BsPlus className="ms-2" />
                        <IoEllipsisVertical className="fs-4 ms-2" />
                    </div>
                </h3>
</div>  
{assignments
                        .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                            <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-1 fs-3" />
                                    <div className="d-flex flex-column">
                                        <Link
                                            className="wd-assignment-link fw-bold"
                                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                            style={{ color: 'black', textDecoration: 'none' }}
                                        >{!assignment.editing && assignment.title}
                                        </Link>
                                        <p className="text-muted mb-0 small">Due Sep 19 at 11:59pm | 100 pts</p>
                                    </div>
                                </div>
                                
      { assignment.editing && (
        <input className="form-control w-50 d-inline-block"
               onChange={(e) => dispatch(updateAssignment({ ...assignment, title: e.target.value }))}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  saveModule({ ...assignment, editing: false });
                }
               }}
               defaultValue={assignment.title}/>
      )} 
                                <GreenCheckmark
                                    assignmentId={assignment._id}
                                    editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))}
                                    deleteAssignment={(assignmentId) => removeAssignment(assignmentId)}
                                />
                            </li>
                        ))}
                </ul>
            </ul>
        </div>
    );
}