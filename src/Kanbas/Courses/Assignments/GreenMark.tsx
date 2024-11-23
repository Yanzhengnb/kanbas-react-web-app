import { useState } from "react";
import { FaCheckCircle, FaCircle, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import DeleteAssignmentDialog from "./Deleteassignment";
import Facultyonly from "../../Account/Facultyonly";
export default function GreenCheckmark({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <div className="float-end">
      <Facultyonly>
      <FaTrash
        className="text-danger position-relative me-2"
        style={{ top: "2px" }}
        onClick={() => setShowDeleteDialog(true)}
      /></Facultyonly>
      <span className="me-1 position-relative">
        <FaCheckCircle
          style={{ top: "2px" }}
          className="text-success me-1 position-absolute fs-5"
        />
        <FaCircle className="text-white me-1 fs-6" />
      </span>
      <IoEllipsisVertical className="fs-4" />

      <DeleteAssignmentDialog
        show={showDeleteDialog}
        onHide={() => setShowDeleteDialog(false)}
        onConfirm={() => {
          deleteAssignment(assignmentId);
          setShowDeleteDialog(false);
        }}
      />
    </div>
  );
}

