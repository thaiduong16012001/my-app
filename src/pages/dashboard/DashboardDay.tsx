import React from "react";
import { Link } from "react-router-dom";
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
import avtlittle from "./image/avtlittle.png";
import iconNoti from "./image/iconNoti.png";
import {useAppSelector} from"../../redux/app/hook"

function DashboardDay() {
  const fullname = useAppSelector(state=>state.LoginReducer.User.fullname)
  return (
    <div className="app">
      <Sidebar></Sidebar>

      <div className="table tablee">
        <p className="title_dashboard">Dashboard</p>
        <p className="number">Biểu đồ cấp số</p>
        <div className="img_stt">
          <img src={stt1} alt="" />
          <img src={stt2} alt="" />
          <img src={stt3} alt="" />
          <img src={stt4} alt="" />
        </div>
        <div className="dashboard">
          {/* <div className="dropdownn">
            Xem theoo
            <button className="dropbtn">Ngày ▼</button>
            <div className="dropdown-content">
              <Link to="/DashboarDay" className="chose">
                Ngày
              </Link>
              <Link to="/DashboarWeek" className="chose">
                Tuần
              </Link>
              <Link to="/DashboarDay" className="chose">
                Tháng
              </Link>
            </div>
          </div> */}
          <img src={day} alt="" />
        </div>
      </div>
      <div className="dbright">
        <div className="logingg">
          <img src={iconNoti} alt="" style={{width:"30px", height:"30px",marginRight:"5px"}} />
          <img src={avtlittle} alt="" style={{marginRight:"5px"}} />
          <div className="titleee" >
            <p>Xin chào</p>
            <p>{fullname }</p>
          </div>
        </div>
        <p>tổng quan</p>
        <img src={per1} alt="" />
        <img src={per2} alt="" />
        <img src={per3} alt="" />
        <img src={cebngay} alt="" />
      </div>
    </div>
  );
}

export default DashboardDay;
