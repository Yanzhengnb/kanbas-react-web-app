import { Link,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const location = useLocation();
   return (
    
       <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
       {links.map((link) => {
         const path = `/Kanbas/Account/${link}`;
         const isActive = location.pathname === path;
         return (
           <Link
             key={link}
             to={path}
             id={`wd-account-${link.toLowerCase()}-link`}
             className={`list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}
           >
             {link}
           </Link>
         );
       })}
     </div>
);}
