import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Profile from "./Profile";
import AccountNavigation from "./Navigation";
import Signup from "./Signup";
export default function Account() {
  return (
    <div id="wd-account-screen" style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: '0 0 200px' }}>
        <AccountNavigation />
      </div>
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      
    </div>
  );
}  

