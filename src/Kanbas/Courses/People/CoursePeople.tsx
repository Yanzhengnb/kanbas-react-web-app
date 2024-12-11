import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { Link, useParams } from "react-router-dom";
import * as coursesClient from "../../Courses/client"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPeople } from "./reduce";


export default function CoursePeople() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const dispatch = useDispatch();

  return (
    <div id="wd-people-table">
      
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
  {users
    .map((user: any) => (
      <tr key={user._id}>
        <td className="wd-full-name text-nowrap">
        <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">{user.firstName}</span>
          <span className="wd-last-name">{user.lastName}</span>
          
        </td>
        <td className="wd-login-id">{user.loginId}</td>
        <td className="wd-section">{user.section}</td>
        <td className="wd-role">{user.role}</td>
        <td className="wd-last-activity">{user.lastActivity}</td>
        <td className="wd-total-activity">{user.totalActivity}</td>
      </tr>
    ))}
</tbody>

        
      </table>
    </div> );}