import { Route, useLocation, useNavigate } from "react-router-dom";
import { Select, Form, Input, Row, Col, Button, DatePicker, Modal, } from "antd";
import React, { useState, useEffect } from "react";
import "../../css/Form.scss";
import { GiveNumber, ResBodyGiveNumber } from "../../database/GiveNumber";
import { AddGiveNumber, UpdateGiveNumber } from "../../service/giveNumber";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { ChangeData } from "../../redux/fetures/device/diviceSlice";
import { UPDATE_FORM, ADD_FORM } from "../../util/configText";
import { dataService, powerSupply } from "../../fecthData/dataoptions";
import { fetchgiveNumberAll } from "../../redux/fetures/giveNumber/giveNumberSlice";
import {
  KHAM_SAN_PHU_KHOA,
  KHAM_RANG_HAM_MAT,
  KHAM_TAI_MUI_HONG,
} from "../../util/configText";
import "../../css/Modal.scss";
import { Router } from "../../Customrouter";
import dayjs from "dayjs";
type options = {
  label: string;
  value: string;
};
const arrRandomStatus: number[] = [0, 1, 2];
type Props = { type: string };
const FormDevice: React.FC<Props> = ({ type }) => {
  const { ListAllgiveNumber } = useAppSelector(
    (state) => state.giveNumberReducer
  );
  const [openModel, setOpenModel] = useState<boolean>(false);
  const navigate = useNavigate();
  const [loading, setLoadings] = useState<boolean>(false);
  const { state } = useLocation();
  const [form] = Form.useForm();
  const [giveNumberModel, setGiveNumberModel] = useState<GiveNumber>({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type === UPDATE_FORM) {
      form.setFieldsValue(state?.record);
    } else if (type === ADD_FORM) {
      dispatch(fetchgiveNumberAll());
    }
  }, []);

  const onFinish = (values: ResBodyGiveNumber) => {
    const ListSort: GiveNumber[] = [...ListAllgiveNumber].sort(
      (a: any, b: any) => a?.stt - b?.stt
    );

    const body: ResBodyGiveNumber = {
      ...values,
      HSD: dayjs(values.HSD).toISOString(),
      grantTime: new Date().toISOString(),
      stt: Number(ListSort[ListSort.length - 1]?.stt) + 1,
      status:
        arrRandomStatus[Math.floor(Math.random() * arrRandomStatus.length)],
    };

    if (type === ADD_FORM) {
      AddGiveNumberFC(body);
    } else if (type === UPDATE_FORM) {
      UpdateGiveNumberFC(body);
    }
    console.log("Success:", body);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const AddGiveNumberFC = async (resBody: ResBodyGiveNumber) => {
    try {
      setLoadings(true);
      const data = await AddGiveNumber(resBody);
      if (data) {
        setLoadings(false);
        dispatch(ChangeData());
        form.resetFields();
        dispatch(fetchgiveNumberAll());
        setOpenModel(true);
        const newRes = {
          stt: resBody.stt,
          nameService:
            resBody.nameService === KHAM_RANG_HAM_MAT
              ? "Khám Răng Hàm Mặt"
              : resBody.nameService === KHAM_SAN_PHU_KHOA
              ? "Khám Sản Phụ Khoa"
              : resBody.nameService === KHAM_TAI_MUI_HONG
              ? "Khám tai mũi họng"
              : "Khám Tim Mạch",
          HSD: dayjs(resBody.HSD).format("HH:mm DD/MM/YYYY"),
          grantTime: dayjs(resBody.grantTime).format("HH:mm DD/MM/YYYY"),
        };
        setGiveNumberModel(newRes);
      }
    } catch (e) {
      setLoadings(false);
      alert("xay ra loi");
    }
  };

  const UpdateGiveNumberFC = async (resBody: ResBodyGiveNumber) => {
    try {
      setLoadings(true);
      const data = await UpdateGiveNumber(resBody.id as string, resBody);
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
          <div className="Title">Thông Tin Thiết bị </div>
          <Row gutter={15}>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="form-item-label-top"
                label="Tên khách hàng"
                name="nameUser"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Nhập Tên Khách hàng" />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="form-item-label-top"
                label="Số điện thoại"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please input your phoneNumber!" },
                ]}
              >
                <Input placeholder="Nhập Số Điện Thoại" />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="form-item-label-top"
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Nhập địa chỉ email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Tên Dịch Vụ"
                name="nameService"
                rules={[
                  { required: true, message: "Please input your nameDevice!" },
                ]}
              >
                <Select placeholder="Tên dịch vụ" options={dataService} />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Hạn sử dụng"
                name="HSD"
                rules={[
                  {
                    validator: (_, value) =>
                      validateCustomRule(value, "Please input your day"),
                  },
                ]}
              >
                <DatePicker
                  showTime
                  placeholder="Hạn sử dụng"
                  style={{ width: "100%", height: "38px" }}
                />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Nguồn Cấp"
                name="powerSupply"
                rules={[
                  { required: true, message: "Please input your powerSupply!" },
                ]}
              >
                <Select placeholder="Nguồn cấp" options={powerSupply} />
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
              onClick={() => navigate(Router.GiveNumber.List.pathName)}
            >
              Hủy bỏ
            </div>
            <Button
              htmlType="submit"
              className="btn-login device"
              loading={loading}
            >
              {type === ADD_FORM
                ? "In Số"
                : type === UPDATE_FORM
                ? "Cập nhật thiết bị"
                : ""}
            </Button>
          </Row>
        </Form.Item>
      </Form>
      <>
        <Modal
          open={openModel}
          onCancel={() => {
            setOpenModel(false);
          }}
          footer={null}
          destroyOnClose={true}
          mask={false}
          style={{ top: "200px" }}
        >
          <div className="boxModal">
            <div className="HeaderModal">
              <div className="SttCsstitLe">Số Thứ Tự Được Cấp</div>
              <div className="SttCssContent">{giveNumberModel.stt}</div>
              <div className="DVcss">DV: {giveNumberModel.nameService} </div>
            </div>
          </div>
          <div className="footer">
            <div>Thời Gian Cấp: {giveNumberModel.grantTime}</div>
            <div>Hạn Sử Dụng: {giveNumberModel.HSD}</div>
          </div>
        </Modal>
      </>
    </>
  );
};
export default FormDevice;
