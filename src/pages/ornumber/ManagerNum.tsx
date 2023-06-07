import React from "react";
import { Link } from "react-router-dom";
// import "../auth//profileInfo/Profile.css";
// import "./RoleManage.css";
import Sidebar from "../components/sidebar/Sidebar";
import Logging from "../components/logging/Logging";

function ManagerNum() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Logging></Logging>
      <div className="table">
        <div className="table_top">
          <p className="list">Danh sách tài khoản</p>
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
            <Link to="/NewNumber" className="forgotpass">
              +
            </Link>
          </p>
          <p className="namerole">Tải về</p>
        </div>

        <table>
          <tr>
            <th className="name__column">STT</th>
            <th className="name__column">Tên DV</th>
            <th className="name__column">Thời gian cấp</th>
            <th className="name__column">Tình trạng</th>
            <th className="name__column">Nguồn cấp</th>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
            <td>Vai trò</td>
          </tr>
          <tr>
            <td>Bác sĩ</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
            <td>Vai trò</td>
          </tr>
          <tr>
            <td>Lễ tân</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
            <td>Vai trò</td>
          </tr>
          <tr>
            <td>Quản lý</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
            <td>Vai trò</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
            <td>Vai trò</td>
          </tr>
          <tr>
            <td>Super Amin</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
            <td>Vai trò</td>
          </tr>
          <tr>
            <td>Super Amin</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
            <td>Vai trò</td>
          </tr>
          <tr>
            <td>Super Amin</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
            <td>Cập nhật</td>
            <td>Vai trò</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ManagerNum;
