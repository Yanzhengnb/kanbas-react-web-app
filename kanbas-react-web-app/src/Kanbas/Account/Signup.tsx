import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3 className="mb-4">Sign up</h3>
      <input
        className="form-control mb-3"
        placeholder="Username"
        type="text"
      />
      <input
        className="form-control mb-3"
        placeholder="Password"
        type="password"
      />
      <input
        className="form-control mb-3"
        placeholder="Verify Password"
        type="password"
      />
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary mb-2">
        Sign up
      </Link>
      <br />
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
