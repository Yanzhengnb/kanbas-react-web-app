import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(a => a._id === aid && a.course === cid);
  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container-fluid mt-4">


      <div className="mb-3 row">
        <label htmlFor="wd-name" className="col-sm-2 col-form-label text-end">Assignment Name</label>
        <div className="col-sm-10">
          <input id="wd-name" className="form-control" defaultValue={assignment.title} />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-description" className="col-sm-2 col-form-label text-end">Description</label>
        <div className="col-sm-10">
          <textarea
            id="wd-description"
            className="form-control"
            rows={10}
            defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanban application."
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-points" className="col-sm-4 col-form-label text-end">Points</label>
        <div className="col-sm-8">
          <input id="wd-points" className="form-control" defaultValue={100} />
        </div>
      </div>



      <div className=" border p-3 rounded col-sm-8 offset-sm-4">

        <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label">Assign to</label>
        <div className="mb-3 row">
          <div className="col-sm-12">
            <input id="wd-assign-to" className="form-control " defaultValue="Everyone" />
          </div>
        </div>
        <label htmlFor="wd-due-date" className="col-sm-3 col-form-label ">Due</label>
        <div className="mb-3 row">
          <div className="col-sm-12">
            <input type="date" id="wd-due-date" className="form-control" defaultValue="2024-05-13T23:59" />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="wd-available-from" className="text-end">Available from</label>
            <input type="date" id="wd-available-from" className="form-control" defaultValue="2024-05-06T00:00" />
          </div>
          <div className="col">
            <label htmlFor="wd-available-until" className="text-end">Until</label>
            <input type="date" id="wd-available-until" className="form-control" defaultValue="2024-05-20T00:00" />
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end mt-3">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>

        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger me-2">
          Save
        </Link>

      </div>
    </div>
  );
}
