import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
    <div className="row row-cols-1 row-cols-md-5 g-4">
      <div className="wd-dashboard-course col" style={{ width: "260px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%" height={140}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
      
      <div className="wd-dashboard-course col" style={{ width: "260px" }}>
  <div className="card rounded-3 overflow-hidden">
    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
          to="/Kanbas/Courses/5240/Home">
      <img src="/images/reactjs.jpg" width="100%" height={140} />
      <div className="card-body">
        <h5 className="wd-dashboard-course-title card-title">CS5240 Linear Structure</h5>
        <p className="wd-dashboard-course-title card-text">Linear Structure</p>
        <button className="btn btn-primary"> Go </button>
      </div>
    </Link>
  </div>
</div>

<div className="wd-dashboard-course col" style={{ width: "260px" }}>
  <div className="card rounded-3 overflow-hidden">
    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
          to="/Kanbas/Courses/5250/Home">
      <img src="/images/reactjs.jpg" width="100%" height={140} />
      <div className="card-body">
        <h5 className="wd-dashboard-course-title card-title">CS5250 Non-linear Structure</h5>
        <p className="wd-dashboard-course-title card-text">Non-linear Structure</p>
        <button className="btn btn-primary"> Go </button>
      </div>
    </Link>
  </div>
</div>

<div className="wd-dashboard-course col" style={{ width: "260px" }}>
  <div className="card rounded-3 overflow-hidden">
    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
          to="/Kanbas/Courses/5260/Home">
      <img src="/images/reactjs.jpg" width="100%" height={140} />
      <div className="card-body">
        <h5 className="wd-dashboard-course-title card-title">CS5260 Supervised Machine Learning</h5>
        <p className="wd-dashboard-course-title card-text">Supervised Machine Learning</p>
        <button className="btn btn-primary"> Go </button>
      </div>
    </Link>
  </div>
</div>

<div className="wd-dashboard-course col" style={{ width: "260px" }}>
  <div className="card rounded-3 overflow-hidden">
    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
          to="/Kanbas/Courses/5270/Home">
      <img src="/images/reactjs.jpg" width="100%" height={140} />
      <div className="card-body">
        <h5 className="wd-dashboard-course-title card-title">CS5270 Unsupervised Machine Learning</h5>
        <p className="wd-dashboard-course-title card-text">Unsupervised Machine Learning</p>
        <button className="btn btn-primary"> Go </button>
      </div>
    </Link>
  </div>
</div>

<div className="wd-dashboard-course col" style={{ width: "260px" }}>
  <div className="card rounded-3 overflow-hidden">
    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
          to="/Kanbas/Courses/5280/Home">
      <img src="/images/reactjs.jpg" width="100%" height={140} />
      <div className="card-body">
        <h5 className="wd-dashboard-course-title card-title">CS5280 Database Design</h5>
        <p className="wd-dashboard-course-title card-text">MongoDB development</p>
        <button className="btn btn-primary"> Go </button>
      </div>
    </Link>
  </div>
</div>

<div className="wd-dashboard-course col" style={{ width: "260px" }}>
  <div className="card rounded-3 overflow-hidden">
    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
          to="/Kanbas/Courses/5230/Home">
      <img src="/images/reactjs.jpg" width="100%" height={140} />
      <div className="card-body">
        <h5 className="wd-dashboard-course-title card-title">CS5230 Web Design</h5>
        <p className="wd-dashboard-course-title card-text">Stack software developer</p>
        <button className="btn btn-primary"> Go </button>
      </div>
    </Link>
  </div>
  </div>
  </div>
    </div>
    </div>
  );
}

