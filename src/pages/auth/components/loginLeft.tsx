import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../auth/Style.css";
import logo_Alta from "../../../assets/logoAlta.png";
import { Button, Form, Input } from "antd";
import { getUser } from "../../../service/user";
import { User } from "../../../database/User";
import { useAppDispatch } from "../../../redux/app/hook";
import { singIn } from "../../../redux/fetures/login/loginSilce";

import { useNavigate } from "react-router-dom";
type onFinish = {
  username: string;
  password: string;
};
function LoginLeft() {
  const navigate = useNavigate();
  const [loginFail, setLoginFail] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
 
  const onFinish = (values: onFinish) => {
    HandlerLogin(values.username, values.password);
  };

  const HandlerLogin = async (username: string, password: string) => {
    try {
      const ListUser: User[] = await getUser();
      const User = ListUser.find(
        (item) =>
          item.username == username && item.pass == password && item.status
      );
      delete User?.pass;
      delete User?.username;
      if (!User) {
        setLoginFail(true);
      } else {
        dispatch(singIn(User));
        navigate("/Menu/DashboarDay");
        setLoginFail(false);
      }
    } catch (e) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-left">
      <img className="logoAlta" src={logo_Alta} alt="logo" />
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          validateStatus={loginFail ? "error" : undefined}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            onClick={() => setLoginFail(false)}
           
          />
        </Form.Item>

        <Form.Item
          validateStatus={loginFail ? "error" : undefined}
          help={loginFail ? "sai mật khẩu hoặc tên đăng nhập" : undefined}
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            onClick={() => setLoginFail(false)}
            
          />
        </Form.Item>

        <Link to="/ForgotPass" className="forgotpass">
          Quên mật khẩu?
        </Link>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <button type="submit" className="btn-login">
            Đăng nhập
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginLeft;
