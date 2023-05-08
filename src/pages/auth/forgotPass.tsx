import React from "react";
import { Link } from "react-router-dom";
import logo_2 from "../../assets/logo_2.png";
import logo_Alta from "../../assets/logoAlta.png";
const ForgotPass = () => {
  return (
    <div className="login">
      <div className="login-left">
        <img className="logoAlta" src={logo_Alta} alt="logo" />
        <div className="login-form">
          <h1 className="titlee">
            Vui lòng nhập email để đặt lại mật khẩu của bạn *
          </h1>
          <input className="form-input" type="text" placeholder="Nhập email" />
        </div>
        <div className="btn-forgotpass">
          <button className="btn-forgotpass--cancel">
            <Link to="/Login" className="forgotpass">
              Hủy
            </Link>
          </button>
          <button className="btn-forgotpass--continue">
            <Link to="/ConfirmPassword" className="forgotpass">
              Tiếp tục
            </Link>
          </button>
        </div>
      </div>

      <div className="login-right">
        <div className="logo-right-forgotpass">
          <img src={logo_2} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
