import { NavLink } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";


export default function KanbasNavigation() {
    return (
      <div id="wd-kanbas-navigation" className="list-group rounded-0">

        <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" width="75px" /> </a>

        <NavLink to="/Kanbas/Account" className="list-group-item nav-link text-center border-0">
        <FaRegCircleUser className="fs-1 icon-white" /><br />
        Account
      </NavLink>

      <NavLink to="/Kanbas/Dashboard" className="list-group-item nav-link text-center border-0">
        <AiOutlineDashboard className="fs-1 icon-red" /><br />
        Dashboard
      </NavLink>

      <NavLink to="/Kanbas/Courses" className="list-group-item nav-link text-center border-0">
        <LiaBookSolid className="fs-1 icon-red" /><br />
        Courses
      </NavLink>

      <NavLink to="/Kanbas/Calendar" className="list-group-item nav-link text-center border-0">
        <IoCalendarOutline className="fs-1 icon-red" /><br />
        Calendar
      </NavLink>

      <NavLink to="/Kanbas/Inbox" className="list-group-item nav-link text-center border-0">
        <FaInbox className="fs-1 icon-red" /><br />
        Inbox
      </NavLink>

      <NavLink to="/Labs" className="list-group-item nav-link text-center border-0">
        <LiaCogSolid className="fs-1 icon-red" /><br />
        Labs
      </NavLink>

        </div>
      
  );}
  