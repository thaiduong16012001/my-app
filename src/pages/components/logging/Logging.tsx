import React from "react";
import "../../auth/profileInfo/Profile.css";
import iconnoti from "./images/iconNoti.png";
import avtlittle from "./images/avtlittle.png";
import "./Logging.css";
import { useAppSelector } from "../../../redux/app/hook";

const Logging:React.FC = ()=> {
  const fullName = useAppSelector(state=>state.LoginReducer.User.fullname)
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
          <div className="body__name">{fullName}</div>
        </div>
      </div>
    </div>
  );
}

export default Logging;
