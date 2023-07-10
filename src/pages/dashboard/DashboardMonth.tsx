import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Logging from "../components/logging/Logging";
import "./Dashboard.css";
import cebmonth from "./image/cebmonth.png";
import cebweek from "./image/cebweek.png";
import cebngay from "./image/cebngay.png";
import day from "./image/day.jpg";
import week from "./image/week.jpg";
import month from "./image/month.jpg";
import stt1 from "./image/stt1.png";
import stt2 from "./image/stt2.png";
import stt3 from "./image/stt3.png";
import stt4 from "./image/stt4.png";
import per1 from "./image/per1.png";
import per2 from "./image/per2.png";
import per3 from "./image/per3.png";

function DashboardMonth() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="table tablee table_dashboard">
        <p className="title_dashboard">Dashboard</p>
        <p className="number">Biểu đồ cấp số</p>
        <div className="img_stt">
          <img src={stt1} alt="" />
          <img src={stt2} alt="" />
          <img src={stt3} alt="" />
          <img src={stt4} alt="" />
        </div>
        <div className="dashboard">
          <img src={day} alt="" />
        </div>
      </div>
      <div className="dbright">
        <div className="logingg">loggin</div>
        <p>tổng quan</p>
        <img src={per1} alt="" />
        <img src={per2} alt="" />
        <img src={per3} alt="" />
        <img src={cebngay} alt="" />
      </div>
    </div>
  );
}

export default DashboardMonth;
