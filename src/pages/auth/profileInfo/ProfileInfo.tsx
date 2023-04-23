import React from "react";

const ProfileInfo = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="logo">
          <img src="/" alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <>icon</>
              <p>Dash board</p>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="btn-logout">icon đăng xuất</div>
      </div>
      <div className="body">
        <div className="header">
          <h1> Thông tin cá nhân</h1>
          <>icon</>
          <div className="login">
            <div className="avt"></div>
            <div className="name">
              <p>Xin chào</p>
              <p>lê Quỳnh ái vân</p>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="body_1"></div>
          <div className="body_2"></div>
          <div className="body_3"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
