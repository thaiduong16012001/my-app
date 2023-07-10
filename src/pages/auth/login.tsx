import React from "react";
import LoginLeft from "./components/loginLeft";
import LoginRight from "./components/loginRight";
import CSS from 'csstype';
import { Col, Row } from 'antd';

const CssLeft:CSS.Properties ={
  backgroundColor:"white" , height:"100vh"
}

const Login = () => {
  return (
    <div className="login" style={{width:"100%"}}>
    <LoginLeft/>
    <LoginRight/>
    </div>
  );
};
export default Login;
