import React from "react";
import { Link } from "react-router-dom";
import "./Userlog.css";
import Sidebar from "../components/sidebar/Sidebar";
import Logging from "../components/logging/Logging";

function Userlog() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Logging></Logging>
      <div className="table">
        <div className="table_top">Chọn thời gian</div>
        <div className="table_body">
          <table>
            <tr>
              <th className="name__column">Tên đăng nhập</th>
              <th className="name__column">Thời gian tác động</th>
              <th className="name__column">IP thực hiện</th>
              <th className="name__column">Thao tác thực hiện</th>
            </tr>
            <tr>
              <td>Kế toán</td>
              <td>6</td>
              <td>
                Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
              </td>
              <td>Cập nhật</td>
            </tr>
            <tr>
              <td>Bác sĩ</td>
              <td>6</td>
              <td>
                Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
              </td>
              <td>Cập nhật</td>
            </tr>
            <tr>
              <td>Lễ tân</td>
              <td>6</td>
              <td>
                Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
              </td>
              <td>Cập nhật</td>
            </tr>
            <tr>
              <td>Quản lý</td>
              <td>6</td>
              <td>
                Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
              </td>
              <td>Cập nhật</td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>6</td>
              <td>
                Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
              </td>
              <td>Cập nhật</td>
            </tr>
            <tr>
              <td>Super Amin</td>
              <td>6</td>
              <td>
                Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
              </td>
              <td>Cập nhật</td>
            </tr>
            <tr>
              <td>Super Amin</td>
              <td>6</td>
              <td>
                Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
              </td>
              <td>Cập nhật</td>
            </tr>
            <tr>
              <td>Super Amin</td>
              <td>6</td>
              <td>
                Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
              </td>
              <td>Cập nhật</td>
            </tr>
            <tr>
              <td>Super Amin</td>
              <td>6</td>
              <td>
                Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
              </td>
              <td>Cập nhật</td>
            </tr>
          </table>
        </div>
        <div className="paging">
          <a href="/">&laquo;</a>
          <a href="/">1</a>
          <a href="/">2</a>
          <a href="/">3</a>
          <a href="/">4</a>
          <a href="/">5</a>
          <a href="/">6</a>
          <a href="/">&raquo;</a>
        </div>
      </div>
    </div>
  );
}

export default Userlog;
