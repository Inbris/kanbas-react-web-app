import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';
import { FaPlus } from 'react-icons/fa6';
import { BsGripVertical } from 'react-icons/bs';

export default function ModuleControlButtons() {
  return (
    <div className="d-flex align-items-center justify-content-end">
      <div className="me-2">
        <GreenCheckmark />
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