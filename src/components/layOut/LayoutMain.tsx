import React from "react"
import Sidebar from "../../pages/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "../../pages/roleManagement/RoleManage.css";
import "../../pages/roleManagement/Addrole.css";
// import "../../pages/auth/profileInfo/Profile.css";
// import "../../pages/components/logging/Logging.css";
import Logging from "../../pages/components/logging/Logging";
const LayoutMain : React.FC =()=>{
return <div className="app">
      <Sidebar></Sidebar>
      <Logging></Logging>
      <Outlet/>
</div>
}
export default LayoutMain
