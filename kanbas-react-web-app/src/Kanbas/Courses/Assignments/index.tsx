import ModulesControls from "./ModulesControl";
import { BsGripVertical } from 'react-icons/bs';
import { IoMdArrowDropdown } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import Leftbutton from "./LeftButton";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams(); 
    const assignments = db.assignments

    const filteredAssignments = assignments.filter(assignment => assignment.course === cid);

    return (
        <div id="wd-assignments">
            <ModulesControls />
            
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
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

                    <ul className="wd-lessons list-group rounded-0">
                        {filteredAssignments.length > 0 ? (
                            filteredAssignments.map((assignment) => (
                                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <Leftbutton />
                                        <div className="d-flex flex-column">
                                            <Link
                                                className="wd-assignment-link fw-bold"
                                                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                                style={{ color: 'black', textDecoration: 'none' }}
                                            >
                                                {assignment.title}
                                            </Link>
                                            <p className="text-muted mb-0 small">Due Sep 19 at 11:59pm | -/100 pts</p>
                                        </div>
                                    </div>
                                    <LessonControlButtons />
                                </li>
                            ))
                        ) : (
                            <li className="wd-lesson list-group-item p-3 ps-1"></li>
                        )}
                    </ul>
                </li>
            </ul>
        </div>
    );
}



  