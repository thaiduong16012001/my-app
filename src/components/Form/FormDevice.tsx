import { useLocation, useNavigate } from "react-router-dom";
import {Select, Form, Input, Row,Col, Button } from 'antd';
import React,{useState, useEffect} from "react";
import "../../css/Form.scss"
import {ResBodyDevice} from"../../database/Divice"
import { AddDevice,UpdateDevice } from "../../service/device";
import { useAppDispatch } from "../../redux/app/hook";
import { ChangeData } from "../../redux/fetures/device/diviceSlice";
import { UPDATE_FORM,ADD_FORM } from "../../util/configText";
type options = {
  label: string,
  value: string
}
type Props = {type:string}
const FormDevice : React.FC<Props> =({type})=>{
const [optionsType, setOptions] = useState<options[]>(
  [{label:"kiosk", value:"kiosk"}, 
  {label:"display counter", value:"display counter"}]
  )
const navigate = useNavigate()

const [loading, setLoadings] = useState<boolean>(false);
const {state}= useLocation()
console.log("123",state)
const [form] = Form.useForm()
const dispatch = useAppDispatch()
useEffect(()=>{

  if(type=== UPDATE_FORM){
    form.setFieldsValue(state?.record)

  }
},[])
const onFinish = (values: any) => {
  const resBody :ResBodyDevice = {...values,statusActive:true,
    statusConnect:true }
  if(type === ADD_FORM){
    AddDeviceFC(resBody)
  }else if (type === UPDATE_FORM){
    delete resBody.statusActive
    delete resBody.statusConnect
    UpdateDeviceFC(resBody)
  }
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const AddDeviceFC = async(resBody:ResBodyDevice)=>{
  try{
    setLoadings(true)
  const data = await AddDevice(resBody)
   if(data){
    setLoadings(false)
   dispatch(ChangeData())
   alert("Thêm thành công")
  form.resetFields()
   }
  }catch(e){
     setLoadings(false)
    alert("xay ra loi")
  }
  
}

const UpdateDeviceFC = async(resBody:ResBodyDevice)=>{
  try{
    setLoadings(true)
  const data = await UpdateDevice(resBody.id as string, resBody)
   if(data){
    setLoadings(false)
  //  dispatch(ChangeData())
   alert("Cập nhật thành công")
  
   }
  }catch(e){
     setLoadings(false)
    alert("xay ra loi")
  }
  
}

    return<>
    <Form
    form={form}
    style={{width:"100%"}}
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <div className="boxForm">
    <div className="Title">Thông Tin Thiết bị </div> 
      <Row gutter={15} > 
        <Col span={12}>
            <Form.Item
            labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
            className="form-item-label-top"
            label="Mã Thiêt bị"
            name="id"
            // rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input disabled />
            </Form.Item>
            <Form.Item
            labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
            label="Tên Thiết bị"
            name="name"
            rules={[{ required: true, message: 'Please input your nameDevice!' }]}
            >
            <Input   placeholder="Nhập tên thiết bị" />
            </Form.Item>
            <Form.Item
            labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
            label="Địa chỉ Ip"
            name="addressIP"
            rules={[{ required: true, message: 'Please input your addressIp!' }]}
            >
            <Input placeholder="nhập địa chỉ ip" />
            </Form.Item>
        </Col>
        <Col span={12}>
            <Form.Item
            labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
            label="Loại Thiết bị"
            name="type"
            rules={[{ required: true, message: 'Please input your typeDevice!' }]}
            >
           <Select placeholder="Chọn loại thiết bị"  options={optionsType}  />
            </Form.Item>
            <Form.Item
            labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
            label="Tên Đăng Nhập"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input placeholder="Nhập Tên Đăng Nhập" />
            </Form.Item>
            <Form.Item
            labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
            label="Mật Khẩu"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input placeholder="Nhập Mật Khẩu" />
            </Form.Item>
        </Col>
    </Row> 
     <Form.Item
      labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
      label="Dịch vụ sử dụng"
      name="useSrever"
      rules={[{ required: true, message: 'Please input your useServer!' }]}
    >
      <Input placeholder="Nhập dịch vụ sử dụng" />
    </Form.Item>
    
    </div>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{marginTop:"10px"}}>
        <Row>
      <div  className="btn-login device cancel"
      onClick={()=>navigate("/Menu/Device/List")}
      >
         Hủy bỏ
      </div>
       <Button htmlType="submit" className="btn-login device" loading={loading}>
           {type===ADD_FORM ? "Thêm Thiết bị" : type=== UPDATE_FORM?"Cập nhật thiết bị":""}
      </Button>
      </Row>
    </Form.Item>
    </Form>
    </>
   
}
export default FormDevice;