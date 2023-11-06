import Link from 'next/link';
import { FaLaptop,FaUserLarge,FaBusinessTime,FaClipboardList,FaSuitcase,FaRectangleList,FaBox,FaBookBookmark,FaTicket } from "react-icons/fa6";
const Sidebar = () => {
    return (
      <>
<aside className="app-sidebar ps ps--active-y">
  <div className="app-sidebar__user">
    <div className="dropdown user-pro-body text-center">
      <div className="user-pic">
        <img
          src="/1.jpg"
          alt="user-img"
          className="avatar-xl rounded-circle mb-1"
        />
      </div>
      <div className="user-info">
        <h6 className=" mb-0 font-weight-semibold">Anna Sthesia</h6>
        <span className="text-muted app-sidebar__user-name text-sm">Admin</span>
      </div>
    </div>
  </div>
  <ul className="side-menu">
    <li className="slide is-expanded">
    <Link
        className="side-menu__item active"
        href="/admin/Dashboard"
        data-toggle="slide"
      >
        <FaLaptop/> 
        <span className="side-menu__label">Dashboard</span>
      </Link>
    </li>
    <li className="slide">
    <Link
        className="side-menu__item "
        href="/admin/Employeelist"
        data-toggle="slide"
      >
        <FaUserLarge />
        <span className="side-menu__label">List of Employee</span>
      </Link>
    </li>
    <li className="slide">
      <Link className="side-menu__item" data-toggle="slide" href="/admin/serviceschedule">
        <FaBusinessTime/>
        <span className="side-menu__label">Scheduled Services</span>
       
      </Link>      
    </li>
    <li className="slide">
      <Link className="side-menu__item" data-toggle="slide" href="/admin/Listcustomers">
        <FaClipboardList />
        <span className="side-menu__label">List of Customers</span>
      </Link>
    </li>
    <li className="slide">
      <Link className="side-menu__item" data-toggle="slide" href="/admin/Servicerequest">
        <FaSuitcase/>
        <span className="side-menu__label">Services Required</span>
      </Link>
    </li>
    <li>
      <Link className="side-menu__item" href="/admin/detailsservices">
        <FaRectangleList/>
        <span className="side-menu__label">Details of Services</span>
      </Link>
    </li>
    <li className="slide">
      <Link className="side-menu__item" data-toggle="slide" href="/admin/subscription">
        <FaBox/>
        <span className="side-menu__label">Subscription</span>
      </Link>
    </li>
    <li className="slide">
      <Link className="side-menu__item" data-toggle="slide" href="/admin/Role">
        <FaBookBookmark/>
        <span className="side-menu__label">Role</span>
      </Link>
    </li>
    <li className="slide">
      <Link className="side-menu__item" data-toggle="slide" href="/admin/ticket">
        <FaTicket />
        <span className="side-menu__label">Ticket</span>
      </Link>
    </li>
  </ul>
</aside>



</>
  );
};

export default Sidebar;