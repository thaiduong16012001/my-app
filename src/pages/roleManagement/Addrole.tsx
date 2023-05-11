import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Logging from "../components/logging/Logging";
import "./RoleManage.css";
import "./Addrole.css";

function Addrole() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Logging></Logging>
      <div className="table tablee">
        <div className="table_top">
          <p className="list">Danh sách vai trò</p>
        </div>
        <div className="table_body">
          <p className="table_body--title"> Thông tin vai trò </p>
          <div className="table_body--info">
            <div className="table_body--infoleft">
              <div className="left_first">
                <p className="name_title">Tên vai trò * </p>
                <input
                  className="form-input inputt"
                  type="text"
                  placeholder="Nhập tên vai trò"
                />
              </div>
              <div className="left_second">
                <p className="name_title">Mô tả : </p>
                <input
                  className="form-inputt inputt"
                  type="text"
                  placeholder="Nhập mô tả"
                />
              </div>
              <p className="notee">* Là trường thông tin bắt buộc </p>
            </div>
            <div className="table_body--inforight">
              <p className="funcc">Phân quyền chức năng *</p>
              <div className="func_group">
                <div className="func__group">
                  <p className="name_func">Nhóm chức năng A</p>
                  <form>
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label className="check_title"> Tất cả</label>
                    <br />
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label className="check_title"> Chức năng X</label>
                    <br />
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label className="check_title"> Chức năng Y</label>
                    <br />
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label className="check_title"> Chức năng Z</label>
                    <br />
                  </form>
                </div>
                <div className="func__group">
                  <p className="name_func">Nhóm chức năng B</p>
                  <form>
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label className="check_title"> Tất cả</label>
                    <br />
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label className="check_title"> Chức năng X</label>
                    <br />
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label className="check_title"> Chức năng Y</label>
                    <br />
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label className="check_title"> Chức năng Z</label>
                    <br />
                  </form>
                </div>
              </div>
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

export default Addrole;
