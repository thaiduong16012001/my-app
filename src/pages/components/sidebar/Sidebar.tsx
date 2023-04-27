import React from "react";
import logo_Alta from "../../../assets/logoAlta.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// icon sidebar
import dashboard from "./iconSidebar/dashboard.png";
import device from "./iconSidebar/device.png";
import service from "./iconSidebar/service.png";
import ordinal_number from "./iconSidebar/ordinal_number.png";
import report from "./iconSidebar/report.png";
import setting from "./iconSidebar/setting.png";
import btnlogout from "./iconSidebar/btn-logout.png";
import icondot from "./iconSidebar/icondot.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo_Alta} alt="" />
      </div>
      <div className="sidebar__menu">
        <ul className="sidebar__menu--list">
          <li>
            <div className="sidebar__icon">
              <img src={dashboard} alt="" />
            </div>
            <p className="sidebar__title">Dashboard</p>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={device} alt="" />
            </div>
            <p className="sidebar__title">Thiết bị</p>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={service} alt="" />
            </div>
            <p className="sidebar__title">Dịch vụ</p>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={ordinal_number} alt="" />
            </div>
            <p className="sidebar__title">Cấp số</p>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={report} alt="" />
            </div>
            <p className="sidebar__title">Báo cáo</p>
          </li>
          <li>
            <div className="sidebar__icon--left">
              <img src={setting} alt="" />
            </div>
            <p className="sidebar__title">Cài đặt hệ thống</p>
            <div className="sidebar__icon--left">
              <img src={icondot} alt="" />
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar__btn--logout">
        <div className="sidebar__btn--logout_icon">
          <img src={btnlogout} alt="" />
        </div>
        <div className="sidebar__btn--logout_title">
          <Link to="/RoleManage" className="btn-loginn">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
