import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Logging from "../components/logging/Logging";
// import "./RoleManage.css";
import "./Addacc.css";

function Addacc() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Logging></Logging>
      <div className="table tablee">
        <div className="table_top">
          <p className="list">Quản lý tài khoản</p>
        </div>
        <div className="table_body">
          <p className="table_body--title">Thông tin TK</p>
          <div className="grid-containerr">
            <div className="grid-itemm">
              <p className="name_title">Họ tên* </p>
              <input
                className="form-input inputt"
                type="text"
                placeholder="Nhập tên vai trò"
              />
            </div>
            <div className="grid-itemm">
              <p className="name_title">Tên đăng nhập* </p>
              <input
                className="form-input inputt"
                type="text"
                placeholder="Nhập tên vai trò"
              />
            </div>
            <div className="grid-itemm">
              <p className="name_title">SĐT* </p>
              <input
                className="form-input inputt"
                type="text"
                placeholder="Nhập tên vai trò"
              />
            </div>
            <div className="grid-itemm">
              <p className="name_title">MK* </p>
              <input
                className="form-input inputt"
                type="text"
                placeholder="Nhập tên vai trò"
              />
            </div>
            <div className="grid-itemm">
              <p className="name_title">Mail* </p>
              <input
                className="form-input inputt"
                type="text"
                placeholder="Nhập tên vai trò"
              />
            </div>
            <div className="grid-itemm">
              <p className="name_title">Nhập lại mk* </p>
              <input
                className="form-input inputt"
                type="text"
                placeholder="Nhập tên vai trò"
              />
            </div>
            <div className="grid-itemm">
              <p className="name_title">Vai trò* </p>
              <input
                className="form-input inputt"
                type="text"
                placeholder="Nhập tên vai trò"
              />
            </div>
            <div className="grid-itemm">
              <p className="name_title">Tình trạng* </p>
              <input
                className="form-input inputt"
                type="text"
                placeholder="Nhập tên vai trò"
              />
            </div>
          </div>
        </div>
        <div className="body_button">
          <button className="body_button body_button--first"> Hủy bỏ </button>
          <button className="body_button body_button--second"> Thêm </button>
        </div>
      </div>
    </div>
  );
}

export default Addacc;
