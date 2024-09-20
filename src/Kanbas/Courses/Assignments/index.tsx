export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/A1">
              A1
            </a>
            <p>Due Sep 19 at 11:59pm | -/100 pts
            </p>
          </li>
          <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/A2">
              A2
            </a>
            <p>Due Oct 3 at 11:59pm | -/100 pts
            </p> 
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/A3">
            A3
            </a>
            <p>Due Oct 17 at 11:59pm | -/100 pts</p>
            </li>

            <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/A4">
            A4
            </a>
            <p>Due Oct 31 at 11:59pm | -/100 pts</p>
            </li>

            <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/A5">
            A5
            </a>
            <p>Due Nov 14 at 11:59pm | -/100 pts</p>
            </li>

            <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/A6">
            A6
            </a>
            <p>Due Nov 28 at 11:59pm | -/100 pts</p>
            </li>
        </ul>
      </div>
  );}
  