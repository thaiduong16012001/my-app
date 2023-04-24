import React from "react";
import "./Profile.css";
import avt from "../../../assets/avt.png";

const ProfileInfo = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
          logo
          <img src="/" alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <div className="icon">icon</div>
              <p>Dash board</p>
            </li>
            <li>
              <div className="icon">icon</div>
              <p>Thiết bị</p>
            </li>
            <li>
              <div className="icon">icon</div>
              <p>Dịch vụ</p>
            </li>
            <li>
              <div className="icon">icon</div>
              <p>Cấp số</p>
            </li>
            <li>
              <div className="icon">icon</div>
              <p>Báo cáo</p>
            </li>
            <li>
              <div className="icon">icon</div>
              <p>Cài đặt hệ thống</p>
            </li>
          </ul>
        </div>
        <div className="btn-logout">button đăng xuất</div>
      </div>
      <div className="body">
        <div className="body-top">
          <div className="title">Thông tin cá nhân</div>
          <div className="noti">chuông</div>
          <div className="info-login">
            <div className="avt">
              <img src="" alt="" />
            </div>
            <div className="title-hello">Xin chào</div>
            <div className="title-name">Lê Quỳnh Ái Vân</div>
          </div>
        </div>
        <div className="body-mid">
          <div className="avatar">
            <img src={avt} alt="AVT ở đây nha" />
            <div className="icon">icon camera</div>
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
