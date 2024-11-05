import ModulesControls from "./ModulesControl";
import { BsGripVertical } from 'react-icons/bs';
import { IoMdArrowDropdown } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import Leftbutton from "./LeftButton";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import { useState } from "react";
import { addAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import Facultyonly from "../../Account/Facultyonly";
import ModuleControlButtons from "./ControlButtons"
import GreenCheckmark from "./GreenMark";
import { deleteAssignment } from "./reducer";
import { FaPlus, FaSearch } from "react-icons/fa";
export default function Assignments() {
    const { cid } = useParams(); 
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const [moduleName, setModuleName] = useState("");
    
    
  
    return (
        <div id="wd-assignments">
            <Facultyonly>
            <div id="wd-modules-controls" className="text-nowrap"><Link
                                            className="wd-assignment-link fw-bold"
                                            to={`/Kanbas/Courses/${cid}/Assignments/A101`}
                                            style={{ color: 'black', textDecoration: 'none' }}
                                        >
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me float-end " >
    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
    Assignment
  </button> </Link>
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
                <div className="wd-title p-3 ps-2 bg-secondary">
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
                                        >
                                            {assignment.title}
                                        </Link>
                                        <p className="text-muted mb-0 small">Due Sep 19 at 11:59pm | 100 pts</p>
                                    </div>
                                </div>
                                <GreenCheckmark
                                    moduleId={assignment._id}
                                    deleteAssignment={(moduleId) => dispatch(deleteAssignment(moduleId))}
                                />
                            </li>
                        ))}
                </ul>
            </ul>
        </div>
    );
}