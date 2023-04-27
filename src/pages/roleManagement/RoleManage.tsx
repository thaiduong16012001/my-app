import React from "react";
// import "../auth//profileInfo/Profile.css";
import "./RoleManage.css";
import Sidebar from "../components/sidebar/Sidebar";
import Logging from "../components/logging/Logging";

function RoleManage() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Logging></Logging>
      {/* <div className="header">
        <div className="setting">Cài đặt hệ thống</div>
      </div>
      <div className="bodyy">
        <p>Danh sách vai trò</p>
        <div className="find">
          <p>Từ khóa</p>
          <div className="find__input">
            <form>
              <input
                value="Nhập từ khóa"
                type="search"
                id="gsearch"
                name="gsearch"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>Tên vai trò</th>
            <th>Số người</th>
            <th>Mô tả</th>
            <th></th>
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
      </div> */}
    </div>
  );
}

export default RoleManage;
