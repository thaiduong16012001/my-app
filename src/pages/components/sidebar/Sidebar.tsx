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
import { useAppDispatch } from "../../../redux/app/hook";
import { singOut } from "../../../redux/fetures/login/loginSilce";
import { Router } from "../../../Customrouter";
import { Popover } from "antd";
import CSS from "csstype";
const cssContentLi: CSS.Properties = {
  width: "100%",
  display: "block",
  padding: "10px 10px",
};
const cssContentbackground: CSS.Properties = {
  backgroundColor: " #FF9138",
  ...cssContentLi,
  color: "white",
};
const content = (
  <ul>
    <li>
      <Link style={cssContentLi} to={Router.ManagerRole.List.pathName}>
        Quản Lý Vai Trò
      </Link>
    </li>
    <li>
      <Link style={cssContentLi} to={Router.ManagerAccount.List.pathName}>
        Quản Lý Tài Khoản
      </Link>
    </li>
    <li>
      <Link style={cssContentLi} to={Router.ManagerActiveLog.List.pathName}>
        Quản Lý Người Dùng
      </Link>
    </li>
  </ul>
);
function Sidebar() {
  const dispatch = useAppDispatch();
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
            <p className="sidebar__title">
              <Link to="/Menu/DashboarDay" className="btn-loginn">
                Dashboard
              </Link>
            </p>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={device} alt="" />
            </div>
            <Link to={Router.Device.List.pathName} className="btn-loginn">
              Thiết bị
            </Link>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={service} alt="" />
            </div>
            <Link to={Router.Service.List.pathName} className="btn-loginn">
              Dịch vụ
            </Link>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={ordinal_number} alt="" />
            </div>
            <p className="sidebar__title">
              <Link to={Router.GiveNumber.List.pathName} className="btn-loginn">
                Cấp số
              </Link>
            </p>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={report} alt="" />
            </div>
            <p className="sidebar__title">
              <Link to={Router.Report.List.pathName} className="btn-loginn">
                Báo cáo
              </Link>
            </p>
          </li>
          <li>
            <Popover
              placement="right"
              content={content}
              arrow={false}
              trigger="click"
            >
              <div style={{ display: "flex", width: "100%" }}>
                <div className="sidebar__icon--left">
                  <img src={setting} alt="" />
                </div>
                <p className="sidebar__title">Cài đặt hệ thống</p>
                <div className="sidebar__icon--left">
                  <img src={icondot} alt="" />
                </div>
              </div>
            </Popover>
          </li>
        </ul>
      </div>
      <div
        className="sidebar__btn--logout"
        onClick={() => {
          dispatch(singOut());
        }}
      >
        <div className="sidebar__btn--logout_icon">
          <img src={btnlogout} alt="" />
        </div>
        <div className="sidebar__btn--logout_title">Đăng xuất</div>
      </div>
    </div>
  );
}

export default Sidebar;
