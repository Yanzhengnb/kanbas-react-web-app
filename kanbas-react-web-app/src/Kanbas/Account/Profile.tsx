import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" >
      <h3 className="mb-3">Profile</h3>
      
      <div className="mb-2">
        <input id="wd-username" className="form-control" value="alice" placeholder="Username" />
      </div>
      
      <div className="mb-2">
        <input id="wd-password" className="form-control" value="123" placeholder="123"  />
      </div>
      
      <div className="mb-2">
        <input id="wd-firstname" className="form-control" value="Alice" placeholder="First Name" />
      </div>
      
      <div className="mb-2">
        <input id="wd-lastname" className="form-control" value="Wonderland" placeholder="Last Name" />
      </div>
      
      <div className="mb-2">
        <input id="wd-dob" className="form-control"  type="date" />
      </div>
      
      <div className="mb-2">
        <input id="wd-email" className="form-control" value="alice@wonderland" type="email" />
      </div>
      
      <div className="mb-2">
        <select id="wd-role" className="form-select">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      
      <Link to="/Kanbas/Account/Signin" className="btn btn-danger col-sm-12">Sign out</Link>
    </div>
  );
}

