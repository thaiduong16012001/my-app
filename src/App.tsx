import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import React from "react";
import Login from "./pages/auth/login";
import ForgotPass from "./pages/auth/forgotPass";
import ConfirmPassword from "./pages/auth/confirmPassword";
import ProfileInfo from "./pages/auth/profileInfo/ProfileInfo";
import RoleManage from "./pages/roleManagement/RoleManage";
import Addrole from "./pages/roleManagement/Addrole";
import Userlog from "./pages/userLog/Userlog";
function App() {
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li>
            <Link to="/Login"></Link>
          </li>
          <li>
            <Link to="/ForgotPass"> </Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="/ConfirmPassword" element={<ConfirmPassword />} />
        <Route path="/ProfileInfo" element={<ProfileInfo />} />
        <Route path="/RoleManage" element={<RoleManage />} />
        <Route path="/Addrole" element={<Addrole />} />
        <Route path="/Userlog" element={<Userlog />} />
      </Routes>
    </div>
  );
}
export default App;
