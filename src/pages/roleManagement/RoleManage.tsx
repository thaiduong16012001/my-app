import React from "react";
import { Link } from "react-router-dom";
// import "../auth//profileInfo/Profile.css";
import "./RoleManage.css";
import Sidebar from "../components/sidebar/Sidebar";
import Logging from "../components/logging/Logging";

function RoleManage() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Logging></Logging>
      <div className="table">
        <div className="table_top">
          <p className="list">Danh sách vai trò</p>
          <div className="find">
            <p className="keyword">Từ khóa</p>
            <div className="find__input">
              <form>
                <input className="input" value="Nhập từ khóa" type="search" />
              </form>
            </div>
          </div>
        </div>

        <div className="addrole">
          <p className="add">
            <Link to="/Addrole" className="forgotpass">
              +
            </Link>
          </p>
          <p className="namerole">Thêm vai trò</p>
        </div>

        <table>
          <tr>
            <th className="name__column">Tên vai trò</th>
            <th className="name__column">Số người</th>
            <th className="name__column">Mô tả</th>
            <th className="name__column"></th>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>Bác sĩ</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>Lễ tân</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>Quản lý</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>Super Amin</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default RoleManage;
