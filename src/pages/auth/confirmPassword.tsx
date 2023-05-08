import React from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import logo_2 from "../../assets/logo_2.png";
import logo_Alta from "../../assets/logoAlta.png";

const ConfirmPassword = () => {
  return (
    <div className="login">
      <div className="login-left">
        <img className="logoAlta" src={logo_Alta} alt="logo" />
        <div className="login-form">
          <h1 className="titlee">Mật khẩu </h1>
          <input
            className="form-input"
            type="password"
            placeholder="Password"
          />
          <h1 className="titlee">Nhập lại mật khẩu </h1>
          <input
            className="form-input"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="btn-login btn-login--confirm">Xác nhận</button>
      </div>
      <div className="login-right">
        <div className="logo-right">
          <img src={logo_2} alt="logo" />
        </div>
      </div>
    </div>
  );
};
export default ConfirmPassword;
