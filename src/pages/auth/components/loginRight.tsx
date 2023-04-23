import React from "react";
import "../../auth/Style.css";
import logo_1 from "../../../assets/logo_1.png";

function LoginRight() {
  return (
    <div className="login-right">
      <div className="logo-right">
        <img src={logo_1} alt="logo" />
      </div>
      <div className="text-right">
        <h2 className="text-right-top">Hệ Thống</h2>
        <h1 className="text-right-bottom">QUẢN LÝ XẾP HÀNG</h1>
      </div>
    </div>
  );
}

export default LoginRight;
