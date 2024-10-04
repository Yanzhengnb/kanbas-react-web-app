import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { ImLab } from "react-icons/im"
import {TbHelp} from "react-icons/tb";
import { FaInbox, FaRegCircleUser, FaRegClock, FaDesktop } from "react-icons/fa6";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }} 
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a><br />
      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </Link>
        <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0
                   bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" />
        Dashboard </Link>
      <Link to="/Kanbas/Dashboard" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" />
        Courses </Link>
        <Link to="/Kanbas/Dashboard" id="dashboard-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <IoCalendarOutline className="fs-1 text-danger" />
        Calendar </Link>
        <Link to="../Labs" id="Lab-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <ImLab className="fs-1 text-danger" /><br />
        Lab </Link>
        <Link to="/Kanbas/Dashboard" id="Inbox-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox </Link>
        <Link to="/Kanbas/Dashboard" id="History-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <FaRegClock className="fs-1 text-danger" /><br />
        History </Link>
        <Link to="/Kanbas/Dashboard" id="Studio-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <FaDesktop className="fs-1 text-danger" /><br />
        Studio </Link>
        <Link to="/Kanbas/Dashboard" id="Help-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <TbHelp className="fs-1 text-danger" /><br />
        Help </Link>
    </div>
);}
