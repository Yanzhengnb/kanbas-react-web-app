import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS              
                 </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5240/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS5240 Linear Structure              
                 </h5>
              <p className="wd-dashboard-course-title">
              Linear Structure
              </p>
              <button> Go </button>
            </div>
          </Link></div>
        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5250/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS5250 non-linear Structure              
                 </h5>
              <p className="wd-dashboard-course-title">
              non-linear Structure
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
          <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5260/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS5260   Supervised Machine Learning            
                 </h5>
              <p className="wd-dashboard-course-title">
              Supervised Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link></div>
          <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5270/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS5270 Unsupervied Machine Learning              
                 </h5>
              <p className="wd-dashboard-course-title">
              Unsupervied Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link></div>
          <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5280/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS5280 Database Design              
                 </h5>
              <p className="wd-dashboard-course-title">
                MongaDB development
              </p>
              <button> Go </button>
            </div>
          </Link></div>
          <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5230/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS5230 Web Design              
                 </h5>
              <p className="wd-dashboard-course-title">
                Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link></div>
      </div>
    </div>
  );
}

