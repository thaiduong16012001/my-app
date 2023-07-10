import { Route, useLocation, useNavigate } from "react-router-dom";
import { Form, Input, Row, Col, Button, Checkbox } from "antd";
import React, { useState, useEffect } from "react";
import "../../css/Form.scss";
import { Role, resBodyRole } from "../../database/Role";
import { AddRole, UpdateRole } from "../../service/managerRoles";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { ChangeData } from "../../redux/fetures/device/diviceSlice";
import { UPDATE_FORM, ADD_FORM } from "../../util/configText";

import "../../css/Modal.scss";
import { Router } from "../../Customrouter";
import { optionsFC } from "../../fecthData/dataoptions";
import dayjs from "dayjs";

const { TextArea } = Input;

type Props = { type: string };
const FormDevice: React.FC<Props> = ({ type }) => {
  const navigate = useNavigate();
  const [loading, setLoadings] = useState<boolean>(false);
  const { state } = useLocation();
  const [valueCheckbox, setValueChekbox] = useState<string[]>([]);
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type === UPDATE_FORM) {
      form.setFieldsValue(state?.record);
    } 
  }, []);

  const onFinish = (values: resBodyRole) => {
    console.log(values);
    const body = { ...values, listCN: JSON.stringify(valueCheckbox) };
    if (type === ADD_FORM) {
      AddRoleFC(body);
    } else if (type === UPDATE_FORM) {
      UpdateRoleFC(body);
    }
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const AddRoleFC = async (resBody: resBodyRole) => {
    try {
      setLoadings(true);
      const data = await AddRole(resBody);
      if (data) {
        setLoadings(false);
        dispatch(ChangeData());
        form.resetFields();
        alert("Thêm Thành Công");
      }
    } catch (e) {
      setLoadings(false);
      alert("xay ra loi");
    }
  };

  const UpdateRoleFC = async (resBody: resBodyRole) => {
    try {
      setLoadings(true);
      const data = await UpdateRole(state?.record?.id as string, resBody);
      if (data) {
        setLoadings(false);
        alert("Cập nhật thành công");
      }
    } catch (e) {
      setLoadings(false);
      alert("xay ra loi");
    }
  };
  const validateCustomRule = (value: any, mess: string) => {
    if (
      dayjs(value).isBefore(dayjs(new Date())) ||
      dayjs(value).isSame(dayjs(new Date()))
    ) {
      return Promise.reject(mess);
    }
    return Promise.resolve();
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
          <div className="Title">Thông Tin Vai Trò</div>
          <Row gutter={15}>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="form-item-label-top"
                label="Tên Vai Trò"
                name="name"
                rules={[
                  { required: true, message: "Please input your nameRole!" },
                ]}
              >
                <Input placeholder="Nhập Tên Vai Trò" />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="form-item-label-top"
                label="Mô Tả"
                name="description"
                rules={[
                  { required: true, message: "Please input your description!" },
                ]}
              >
                <TextArea placeholder="Mổ tả" style={{ height: "120px" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="form-item-label-top"
                label="Phần Quyền Chức Năng"
                name="listCN"
                rules={[
                  {
                    required: true,
                    message: "Please input your description!",
                  },
                ]}
              >
                <div
                  style={{
                    backgroundColor: "#FFF2E7",
                    padding: "10px",
                    height: "400px",
                    borderRadius: "8px",
                  }}
                >
                  <Checkbox.Group
                    options={optionsFC}
                    style={{ display: "flex", flexDirection: "column" }}
                    onChange={(value: any) => {
                      setValueChekbox(value);
                    }}
                  />
                </div>
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
              onClick={() => navigate(Router.ManagerRole.List.pathName)}
            >
              Hủy bỏ
            </div>
            <Button
              htmlType="submit"
              className="btn-login device"
              loading={loading}
            >
              {type === ADD_FORM
                ? "Thêm Vai Trò"
                : type === UPDATE_FORM
                ? "Cập nhật Vai Trò"
                : ""}
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormDevice;
