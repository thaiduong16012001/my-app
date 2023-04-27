import React from "react";
import "./Profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import avt from "../../../assets/avt.png";
import iconnoti from "./img/iconNoti.png";
import camera from "./img/camera.png";
import avtlittle from "./img/avtlittle.png";
import Logging from "../../components/logging/Logging";

const ProfileInfo = () => {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="body">
        <div className="body__titleinfo">Thông tin cá nhân</div>
        {/* noti */}
        {/* body info  */}
        <Logging></Logging>
        <div className="body-mid">
          <div className="avatar">
            <img src={avt} alt="AVT ở đây nha" />
            <div className="icon-camera">
              <img src={camera} alt="" />
            </div>
            <h2>Lê Quỳnh Ái Vân</h2>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <div className="title-grid">Tên người dùng</div>
              <input className="input-type" type="text" />
            </div>
            <div className="grid-item">
              <div className="title-grid">Tên đăng nhập</div>
              <input className="input-type" type="text" />
            </div>
            <div className="grid-item">
              <div className="title-grid">Số điện thoại</div>
              <input className="input-type" type="text" />
            </div>
            <div className="grid-item">
              <div className="title-grid">Mật khẩu</div>
              <input className="input-type" type="text" />
            </div>
            <div className="grid-item">
              <div className="title-grid">Email</div>
              <input className="input-type" type="text" />
            </div>
            <div className="grid-item">
              <div className="title-grid">Vai trò :</div>
              <input className="input-type" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
