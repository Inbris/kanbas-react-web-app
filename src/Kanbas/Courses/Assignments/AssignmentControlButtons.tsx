import { IoEllipsisVertical } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { BsGripVertical } from 'react-icons/bs';

export default function AssignmentControlButtons( ) {
  return (
    <div className="d-flex align-items-center justify-content-end">
     <div className="me-2">
        <button className="btn btn-outline-secondary rounded-pill">40% of Total</button>
      </div>
      <div className="me-2">
        <FaPlus className="fs-4" />
      </div>
      <div>
        <IoEllipsisVertical className="fs-4" />
      </div>
    </div>
  );
}