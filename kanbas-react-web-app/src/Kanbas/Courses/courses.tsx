import { Link } from "react-router-dom";
import * as db from "../Database";
import { useSelector } from "react-redux";
import { useState } from "react";
import Facultyonly from "../Account/Facultyonly";
export default function courses1(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {
      const [showCourses, setShowCourses] = useState(false);
      const [firstClick, setFirstClick] = useState(true);
      const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const handleClick = (e: any) => {
    if (firstClick) {
      setFirstClick(false); 
    } else {
      setShowCourses(!showCourses); 
    }
  };
  const handleEnroll = (courseId:string) => {
    if (currentUser && courseId) {
      const isAlreadyEnrolled = db.enrollments.some(
        (enrollment) =>
          enrollment.user === currentUser._id && enrollment.course === courseId
      );
  
      if (isAlreadyEnrolled) {
        alert("You are already enrolled!");
        return;
      }
  
      const nextId = (
        Math.max(...db.enrollments.map((enrollment) => parseInt(enrollment._id))) + 1
      ).toString();

      const newEnrollment = {
        _id: nextId,
        user: currentUser._id,
        course: courseId,
      };
        db.enrollments.push(newEnrollment);
      alert("Enrolled successfully!");
    }
  };
        const handleUnenroll = (courseId:any) => {
        const enrollmentIndex = db.enrollments.findIndex(
          (enrollment) =>
            enrollment.user === currentUser._id && enrollment.course === courseId
        );
        if (enrollmentIndex !== -1) {
          db.enrollments.splice(enrollmentIndex, 1); 
          alert("Course has been unenrolled!");}};


  return (
    <div id="wd-dashboard">
      

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

        {courses
            .filter((course) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              ))
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>
                      <button className="btn btn-primary"> Go </button>
                      <Facultyonly>
                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button></Facultyonly >
                      <Facultyonly><button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </button></Facultyonly>

                    </div>
                  </Link>
                </div>
              </div>
            ))}
            
        </div>
      </div>
    </div>);
}