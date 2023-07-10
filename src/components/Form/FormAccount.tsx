import { useLocation, useNavigate } from "react-router-dom";
import { Select, Form, Input, Row, Col, Button, Spin } from "antd";
import React, { useState, useEffect } from "react";
import "../../css/Form.scss";
import { resBodyUser } from "../../database/User";
import { Role } from "../../database/Role";
import { User } from "../../database/User";
import { AddUser, getUser, UpdateUser } from "../../service/user";
import { getRole } from "../../service/managerRoles";

import { UPDATE_FORM, ADD_FORM } from "../../util/configText";
import { opTionsStatusUser } from "../../fecthData/dataoptions";
import { Router } from "../../Customrouter";

type options = {
  label: string;
  value: string;
};

type Props = { type: string };
const FormDevice: React.FC<Props> = ({ type }) => {
  const navigate = useNavigate();
  const [loading, setLoadings] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const { state } = useLocation();
  const [optionsRoles, setOptionsRoles] = useState<options[]>([]);
  const [form] = Form.useForm();
  useEffect(() => {
    if (type === UPDATE_FORM) {
      const data = { ...state?.record, passpwd: state?.record?.pass };

      form.setFieldsValue(data);
    }
  }, []);
  const onFinish = (values: any) => {
    delete values.passpwd;
    if (type === ADD_FORM) {
      AddUserFC(values);
    } else if (type === UPDATE_FORM) {
      if (optionsRoles.length <= 0) {
        delete values.role;
      }
      UpdateUserFC(values);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const AddUserFC = async (resBody: resBodyUser) => {
    try {
      setLoadings(true);
      const ListUser: User[] = await getUser();
      const isUserName = ListUser.some(
        (user) => user.username === resBody.username
      );
      if (isUserName) {
        alert("Tên Đăng Nhập Đã Có Người Đăng Ký");
        setLoadings(false);
      } else {
        const data = await AddUser(resBody);
        if (data) {
          setLoadings(false);
          alert("Thêm thành công");
          form.resetFields();
        } else {
          alert("xay ra loi");
        }
      }
    } catch (e) {
      setLoadings(false);
      alert("xay ra loi");
    }
  };

  const UpdateUserFC = async (resBody: resBodyUser) => {
    try {
      setLoadings(true);
      const ListUser: User[] = await getUser();
      const isUserName = ListUser.some(
        (user) =>
          user.username === resBody.username && user.id !== state?.record.id
      );
      if (isUserName) {
        alert("Tên Đăng Nhập Đã Có Người Đăng Ký");
        setLoadings(false);
      } else {
        const data = await UpdateUser(state?.record.id as string, resBody);
        if (data) {
          setLoadings(false);
          alert("Cập nhật thành công");
        }
      }
    } catch (e) {
      setLoadings(false);
      alert("xay ra loi");
    }
  };

  const fetchRole = async () => {
    try {
      setFetching(true);
      const roles: Role[] = await getRole();
      if (roles) {
        const option: options[] = roles.map((role) => ({
          value: role?.id,
          label: role?.name,
        })) as options[];
        setOptionsRoles(option);
        setFetching(false);
      }
    } catch (err) {
      alert("có lỗi");
      setFetching(false);
    }
  };
  const validateCustomRulepass = (value: string) => {
    let mess = "";
    let dk;
    if (value && form.getFieldValue("passpwd")) {
      mess = "Nhập Mật Khẩu Không Trùng Khớp";
      dk = value !== form.getFieldValue("passpwd");
    } else if (!value) {
      mess = "Vui Lòng Nhập Mật Khẩu";
      dk = true;
    }
    if (dk) {
      return Promise.reject(mess);
    }
    return Promise.resolve();
  };
  const validateCustomRulepassPWD = (value: string) => {
    let mess = "";
    let dk;
    if (value && form.getFieldValue("pass")) {
      mess = "Nhập Mật Khẩu Không Trùng Khớp";
      dk = value !== form.getFieldValue("pass");
    } else if (!value) {
      mess = "Vui Lòng Nhập Lại Mật Khẩu";
      dk = true;
    }
    if (dk) {
      return Promise.reject(mess);
    }
    return Promise.resolve();
  };
  const propSeletFech =
    optionsRoles.length > 0
      ? {}
      : {
          onFocus: fetchRole,
        };
  return (
    <>
      <Form
        form={form}
        style={{ width: "100%" }}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="boxForm">
          <div className="Title">Thông Tin Thiết bị </div>
          <Row gutter={15}>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="form-item-label-top"
                label="Họ Tên"
                name="fullname"
                rules={[{ required: true, message: "vui lòng nhập họ tên" }]}
              >
                <Input placeholder="Nhập Họ Tên" />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Nhập Số Điện Thoại"
                name="phoneNumber"
                rules={[
                  { required: true, message: "vui lòng nhập số điện thoại" },
                ]}
              >
                <Input placeholder="Nhập Số Điện Thoại" />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "vui lòng nhập email!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  placeholder="nhập Email"
                  onChange={(e) => {
                    form.setFieldsValue({ username: e.target.value });
                  }}
                />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Vai trò"
                name="role"
                rules={[
                  {
                    required: true,
                    message: "vui lòng nhập role!",
                  },
                ]}
              >
                <Select
                  notFoundContent={fetching ? <Spin size="small" /> : null}
                  allowClear={true}
                  {...propSeletFech}
                  options={optionsRoles}
                  placeholder="Chọn Chức Vú"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Tên Đăng Nhập"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input disabled placeholder="Nhập Tên Đăng Nhập" />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Mật Khẩu"
                name="pass"
                rules={[
                  {
                    // required: true,
                    // // message: "Please input your password!",
                    whitespace: true,
                    validator: (_, value) => validateCustomRulepass(value),
                  },
                ]}
              >
                <Input.Password
                  style={{ height: "38px", overflow: "hidden" }}
                  placeholder="Nhập Mật Khẩu"
                />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Nhập Lại Mật Khẩu"
                name="passpwd"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    validator: (_, value) => validateCustomRulepassPWD(value),
                  },
                ]}
              >
                <Input.Password
                  style={{
                    height: "38px",
                    overflow: "hidden",
              
                  }}
                  placeholder="Nhập Lại Mật Khẩu"
                />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Trạng Thái"
                name="status"
                rules={[{ required: true, message: "Chọn Trạng Thái" }]}
              >
                <Select
                  options={opTionsStatusUser}
                  placeholder={"Chọn Trạng Thái"}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <Form.Item
          wrapperCol={{ offset: 8, span: 16 }}
          style={{ marginTop: "10px" }}
        >
          <Row>
            <div
              className="btn-login device cancel"
              onClick={() => navigate(Router.ManagerAccount.List.pathName)}
            >
              Hủy bỏ
            </div>
            <Button
              htmlType="submit"
              className="btn-login device"
              loading={loading}
            >
              {type === ADD_FORM
                ? "Thêm Tài Khoản"
                : type === UPDATE_FORM
                ? "Cập nhật Tài Khoản"
                : ""}
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormDevice;
