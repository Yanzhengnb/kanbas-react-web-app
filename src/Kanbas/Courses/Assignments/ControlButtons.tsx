import { FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
export default function ModuleControlButtons(
{ moduleId, deleteAssignment }: { moduleId: string; deleteAssignment: (moduleId: string) => void; } ) {
  return (
    <div className="float-end">
    <button className="btn btn-outline-secondary ms-2" style={{ borderRadius: '20px' }}>40% of Total</button>

      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(moduleId)}/>
      <BsPlus className="fs-1" />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
