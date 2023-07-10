import { useLocation, useNavigate } from "react-router-dom";
import { Form, Input, Row, Col, Button } from "antd";
import React, { useState, useEffect, useRef } from "react";
import "../../css/Form.scss";

import { AddService, AddServiceDetail, UpdateService } from "../../service/service";
import { useAppDispatch } from "../../redux/app/hook";
import { Router } from "../../Customrouter";
import { UPDATE_FORM, ADD_FORM } from "../../util/configText";
import { setStorage, getStorage } from "../../util/localStore";
import { ServiceDetail, ResBodyService } from "../../database/Service";

type Props = { type: string };
const { TextArea } = Input;

const FormServices: React.FC<Props> = ({ type }) => {
  const [number, setNumber] = useState<number>(getStorage("number") ?? 1);
  let idTimeout: any;
  const ServicesDetail = useRef<ServiceDetail[]>([]);
  const arrRandom: number[] = [0, 1, 2];
  const arrRandomActive: boolean[] = [true, false];
  const navigate = useNavigate();

  const [loading, setLoadings] = useState<boolean>(false);
  const { state } = useLocation();
  console.log("123", state);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (type === UPDATE_FORM) {
      form.setFieldsValue(state?.record);
    }
  }, []);
  useEffect(() => {
    if (type === ADD_FORM) {
      const idTimeout = setInterval(() => {
        setNumber((number) => {
          console.log(number);
          ServicesDetail.current.push({
            Stt: number,
            Status: arrRandom[Math.floor(Math.random() * arrRandom.length)],
          });
          setStorage("number", number);
          return number + 1;
        });
      }, 3000);
      return () => {
        clearInterval(idTimeout);
      };
    }
  }, []);
  const onFinish = (values: any) => {
    console.log(values)
    const resBody: ResBodyService = {
      ...values,
      time: Date.now(),
      statusConnect:
        arrRandomActive[Math.floor(Math.random() * arrRandomActive.length)],
    };
    if (type === ADD_FORM) {
      AddDeviceFC(resBody);
    } else if (type === UPDATE_FORM) {

      UpdateDeviceFC(resBody);
    }
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const AddDeviceFC = async (resBody: ResBodyService) => {
    try {
      clearInterval(idTimeout);
      setLoadings(true);
      const data = await AddService(resBody);
      if (data) {
        const id = data?.name;
        setLoadings(false);
        // dispatch(ChangeData());
        const dataDetail = await AddServiceDetail({
          id,
          ListDetail: ServicesDetail.current,
        });
        if (dataDetail) {
          alert("Thêm thành công");
          form.resetFields();
        }
      }
    } catch (e) {
      setLoadings(false);
      alert("xay ra loi");
    }
  };

  const UpdateDeviceFC = async (resBody: ResBodyService) => {
    try {
      setLoadings(true);
      const data = await UpdateService(resBody.id as string, resBody);
      if (data) {
        setLoadings(false);
        //  dispatch(ChangeData())
        alert("Cập nhật thành công");
      }
    } catch (e) {
      setLoadings(false);
      alert("xay ra loi");
    }
  };
  console.log(ServicesDetail.current);
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
          <div className="Title">Thông Tin Dịch Vụ </div>
          <Row gutter={15}>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="form-item-label-top"
                label="Mã Dịch vụ"
                name="id"
                // rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Tên Dịch vụ"
                name="name"
                rules={[
                  { required: true, message: "Please input your nameService!" },
                ]}
              >
                <Input placeholder="Nhập tên Dịch Vụ" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Mô tả dịch vụ"
                name="description"
              >
                <TextArea
                  rows={4}
                  placeholder="Mô tả ?"
                  style={{ minHeight: "122px" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <div className="Title" style={{ paddingTop: "10px" }}>
            Quy tắc cấp số
          </div>
          <Row style={{ alignItems: "center" }}>
            <div style={{ marginRight: "20px", color: "#282739" }}>
              Tăng Số Tự Động:
            </div>
            <Row style={{ alignItems: "center" }}>
              <Input value={number} style={{ width: "55px" }} />
              <div style={{ margin: "0 6px" }}> Đến </div>
              <Input value={9999} style={{ width: "55px" }} />
            </Row>
          </Row>
        </div>

        <Form.Item
          wrapperCol={{ offset: 8, span: 16 }}
          style={{ marginTop: "10px" }}
        >
          <Row>
            <div
              className="btn-login device cancel"
              onClick={() => navigate(Router.Service.List.pathName)}
            >
              Hủy bỏ
            </div>
            <Button
              htmlType="submit"
              className="btn-login device"
              loading={loading}
            >
              {type === ADD_FORM
                ? "Thêm dịch vụ"
                : type === UPDATE_FORM
                ? "Cập nhật dịch vụ"
                : ""}
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormServices;
