import { FaPlus } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
export default function ModulesControls() {
  const navigate = useNavigate();
  const goToEditor = () => {
    navigate("/Kanbas/Courses/Assignments/A101"); 
  };
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me float-end " onClick={goToEditor}>
    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
    Assignment
  </button>
      <div className="d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary "
          type="button" >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />

          Group</button>
        </div>
        <div id="wd-modules-controls" className="d-flex align-items-center text-nowrap mb-4">
            <div className="position-relative me-2">
                <input 
                    type="text" 
                    placeholder="Search ..." 
                    className="form-control" 
                    style={{
                        paddingLeft: '30px',
                        height: '50px' 
                    }}
                />
                <FaSearch className="position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            </div>
            </div>
        
);}
