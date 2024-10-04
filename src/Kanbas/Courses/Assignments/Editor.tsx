import { FaSearch, FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container-fluid mt-4">


      <div className="mb-3 row">
        <label htmlFor="wd-name" className="col-sm-2 col-form-label text-end">Assignment Name</label>
        <div className="col-sm-10">
          <input id="wd-name" className="form-control" defaultValue="A1" />
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
            
          <div className="mb-3 row">
  <label htmlFor="wd-group" className="col-sm-4 col-form-label text-end">Assignment Group</label>
  <div className="col-sm-8">
    <select id="wd-group" className="form-select">
      <option selected>ASSIGNMENT</option>
      <option value="NON ASSIGNMENT">NON ASSIGNMENT</option>
    </select>
  </div>
</div>

            
<div className="container-fluid mt-4">
  <div className="mb-3 row">
    <label htmlFor="wd-display-grade-as" className="col-sm-4 col-form-label text-end">Display Grade as</label>
    <div className="col-sm-8">
      <select id="wd-display-grade-as" className="form-select">
        <option value="Percentage">Percentage</option>
        <option value="Digital">Digital</option>
      </select>
    </div>
  </div>


  <div className="mb-4 border p-3 rounded col-sm-8 offset-sm-4">
        <div className="mb-3 row">
          <div className="col-sm-12">
            <select id="wd-submission-type" className="form-select">
              <option value="Online">Online</option>
              <option value="In Person">In Person</option>
            </select>
          </div>
        </div>

        <label>Online Entry Options</label>
        <div className="mb-2">
          <input type="checkbox" name="wd-text-entry" id="wd-text-entry" />
          <label htmlFor="wd-text-entry"> Test Entry</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" name="wd-website-url" id="wd-website-url" />
          <label htmlFor="wd-website-url"> Website URL</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings"> Media Recordings</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation"> Student Annotation</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" name="wd-file-upload" id="wd-file-upload" />
          <label htmlFor="wd-file-upload"> File Uploads</label>
        </div>
      </div>
      </div>
      <div className="mb-4 border p-3 rounded col-sm-8 offset-sm-4">
      <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label">Assign to</label>
<div className="mb-3 row">
    <div className="col-sm-9">
      <input id="wd-assign-to" className="form-control " defaultValue="Everyone" />
    </div>
  </div>
      <label htmlFor="wd-due-date" className="col-sm-3 col-form-label ">Due</label>
<div className="mb-3 row">
    <div className="col-sm-9">
      <input type="date" id="wd-due-date" className="form-control" defaultValue="2024-05-13" />
    </div>
  </div>
  <div className="mb-3 row">
    <div className="col">
      <label htmlFor="wd-available-from" className="text-end">Available from</label>
      <input type="date" id="wd-available-from" className="form-control" defaultValue="2024-05-06" />
    </div>
    <div className="col">
      <label htmlFor="wd-available-until" className="text-end">Until</label>
      <input type="date" id="wd-available-until" className="form-control" defaultValue="2024-05-20" />
    </div>
  </div>
</div>

      <hr  />

      {/* Action Buttons */}
      <div className="d-flex justify-content-end mt-3">
       <button className="btn btn-secondary me-2">
           Cancel
        </button> 
        <button className="btn btn-danger me-2">
          Save
        </button>
        
      </div>
    </div>
  );
}
