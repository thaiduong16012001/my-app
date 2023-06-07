import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Logging from "../components/logging/Logging";
// import "./RoleManage.css";
// import "./Addrole.css";

function DashboardWeek() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Logging></Logging>
      <div className="table tablee">
        <div className="table_top">
          <p className="list">Danh sách vai trò</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardWeek;
