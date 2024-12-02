import { Link } from "react-router-dom";
import * as db from "./Database";
import { useSelector } from "react-redux";
import { useState } from "react";
import Facultyonly from "./Account/Facultyonly";
import Studentonly from "./Account/Studentonly";
export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {
      const [showCourses, setShowCourses] = useState(false);
      const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const handleClick = (e: any) => {
    setShowCourses(true);
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
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <Facultyonly><h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
        <input value={course.name} className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />

        <textarea value={course.description} className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })} /><hr /></Facultyonly>

  <Studentonly>    
<div>
  
      <button onClick={(e) => handleClick(e)}
        className="btn btn-primary float-end"
        id="wd-enrollment-click" 
      > Enrollment </button>
      <br/>
             {showCourses && (
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.filter((course) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              ))
            
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            handleUnenroll(course._id); 
                          }}
                          className="btn btn-danger"
                          id="wd-delete-course-click"
                        >
                          Unenroll
                        </button>
                        
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            {courses.filter((course) =>
              !enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              ))
            
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button
                        className="btn btn-success"
                        onClick={(event) => {
                          event.preventDefault();
                          handleEnroll(course._id); 
                        }}
                      >Enroll</button>
                        
                        
                    </div>
                  </Link>
                </div>
              </div>
            ))}



        </div>
      )}
      
    </div>
<br/><hr/>
</Studentonly>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {courses
           
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