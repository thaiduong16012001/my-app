import React from "react";
import { Link } from "react-router-dom";
// import "../auth//profileInfo/Profile.css";
// import "./NewNumber.css";
import Sidebar from "../components/sidebar/Sidebar";
import Logging from "../components/logging/Logging";

function NewNumber() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Logging></Logging>

      <div className="table">
        <div className="table_top">
          <p className="list">Quản lý cấp số</p>
        </div>

        <div className="bodyy">
          <h1>Cấp số mới</h1>

          <h3>Dịch vụ khách hàng lựa chọn</h3>

          <div className="dropdown">
            <button className="dropbtn">
              Dropdown
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div className="btn">
          <button className="btn">Hủy bỏ</button>
          <button className="btn">In số</button>
        </div>
      </div>
    </div>
  );
}

export default NewNumber;
