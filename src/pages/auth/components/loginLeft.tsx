import React from "react";
import { Link } from "react-router-dom";
import { faCheck, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../auth/Style.css";
import logo_Alta from "../../../assets/logoAlta.png";

function LoginLeft() {
  return (
    <div className="login-left">
      <img className="logoAlta" src={logo_Alta} alt="logo" />
      <div className="login-form">
        <h1 className="title">Tên đăng nhập *</h1>
        <input className="form-input" type="text" placeholder="Username" />
        <h1 className="title">Mật khẩu *</h1>
        <input className="form-input" type="password" placeholder="Password" />
        {/* <FontAwesomeIcon icon={faEyeSlash} /> */}
      </div>
      <Link to="/ForgotPass" className="forgotpass">
        Quên mật khẩu?
      </Link>
      <button className="btn-login">
        <Link to="/ProfileInfo" className="ProfileInfo">
          Đăng nhập
        </Link>
      </button>
    </div>
  );
}

export default LoginLeft;
