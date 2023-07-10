import React from 'react';
import BtnLinks from '../../components/buttons/remoteBtnAddtoLinks';
import LayoutContentDetail from '../../components/contents/LayoutContentDetail';
import LayoutContent from "../../components/layOut/layOutContent";
import { useLocation } from 'react-router-dom';
import {Router} from"../../Customrouter"
import {Row,Col} from "antd"
import TitleContent from '../../components/TitleContent';
const Device: React.FC= ()=>{
    const {state} = useLocation()
    
    return(<LayoutContent 
    title='Quản Lý Thiết Bị' 
    BtnLinks={<BtnLinks 
        name='Cập nhật thiết bị' 
        path={Router.Device.Edit.pathName}
        state={state}
         />} 
    Content={<LayoutContentDetail title='Thông Tin Thiết bị '>
            <>
                <Row gutter={[16, 30]}>
                    <Col span={12}>
                    <TitleContent title='Mã Thiết Bị' content={state?.record?.id}/>
                    </Col>
                    <Col span={12}>
                    <TitleContent title='Loại Thiết Bị' content={state?.record?.type}/>
                    </Col>
                    <Col span={12}>
                    <TitleContent title='Tên Thiết Bị' content={state?.record?.name}/>
                    </Col>
                    <Col span={12}>
                    <TitleContent title='Tên Đăng Nhập' content={state?.record?.username}/>
                    </Col>
                    <Col span={12}>
                    <TitleContent title='Địa chỉ ip' content={state?.record?.addressIP}/>
                    </Col>
                    <Col span={12}>
                    <TitleContent title='Mật Khẩu' content={state?.record?.password}/>
                    </Col>
                    <Col span={12}>
                    <TitleContent title='Dịch vụ sử dụng' content={state?.record?.useSrever}/>
                    </Col>

                </Row>
              
            </>
        </LayoutContentDetail>}
    />)
}
export default Device;