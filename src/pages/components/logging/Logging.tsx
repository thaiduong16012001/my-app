import React from "react";
import "../../auth/profileInfo/Profile.css";
import iconnoti from "./images/iconNoti.png";
import avtlittle from "./images/avtlittle.png";
import "./Logging.css";

function Logging() {
  return (
    <div className="body">
      {/* <div className="title">
        <p> Cài đặt hệ thống </p>
      </div> */}
      <div className="body__noti">
        <img src={iconnoti} alt="" />
      </div>

      <div className="body__info">
        <div className="body__avt">
          <img src={avtlittle} alt="" />
        </div>

        <div className="body__avt-right">
          <div className="body__titlehello">Xin chào</div>
          <div className="body__name">Lê Quỳnh Ái Vân</div>
        </div>
      </div>
    </div>
  );
}

export default Logging;
