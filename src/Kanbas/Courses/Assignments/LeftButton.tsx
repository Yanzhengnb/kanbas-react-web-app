import { MdOutlineAssignment } from "react-icons/md";
import { BsGripVertical } from 'react-icons/bs';

export default function Leftbutton() {
    return (
      <div className="float-end">
        <BsGripVertical className="me-2 fs-3" />
        <MdOutlineAssignment className="me-2" style={{ color: 'green' }}/>
      </div>
  );}