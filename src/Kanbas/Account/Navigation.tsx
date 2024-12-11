import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  const active = (path: string) => 
    pathname.includes(path) ? "active bg-white text-black" : "bg-white text-danger";

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Account/${link}`;
        return (
          <Link
            key={link}
            to={path}
            id={`wd-account-${link.toLowerCase()}-link`}
            className={`list-group-item ${active(link)} border border-0`}
          >
            {link}
          </Link>
        );
      })}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item ${active("Users")} border border-0`}
        >
          Users
        </Link>
      )}
    </div>
  );
}


