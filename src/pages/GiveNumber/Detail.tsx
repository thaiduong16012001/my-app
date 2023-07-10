import React from "react";
import BtnLinks from "../../components/buttons/remoteBtnAddtoLinks";
import LayoutContentDetail from "../../components/contents/LayoutContentDetail";
import LayoutContent from "../../components/layOut/layOutContent";
import { useLocation } from "react-router-dom";
import { Router } from "../../Customrouter";
import { Row, Col, Badge } from "antd";
import TitleContent from "../../components/TitleContent";
import { WAI_TING,USED } from "../../util/configText"
const Device: React.FC = () => {
  const { state } = useLocation();

  return (
    <LayoutContent
      title="Quản Lý Cấp Số"
      BtnLinks={
        <BtnLinks name="Quay Lại" path={Router.GiveNumber.List.pathName} />
      }
      Content={
        <LayoutContentDetail title="Thông Tin Cấp Số ">
          <>
            <Row gutter={[16, 30]}>
              <Col span={12}>
                <TitleContent
                  title="Họ Tên"
                  content={state?.record?.nameUser}
                />
              </Col>
              <Col span={12}>
                <TitleContent
                  title="Nguồn Cấp"
                  content={state?.record?.powerSupply}
                />
              </Col>
              <Col span={12}>
                <TitleContent
                  title="Tên Dịch Vụ"
                  content={state?.record?.nameService}
                />
              </Col>
              <Col span={12}>
                <TitleContent
                  title="Trạng Thái"
                  content={
                    <Badge
                      color={
                        state?.record?.status === WAI_TING
                          ? "blue"
                          : state?.record?.status === USED
                          ? "gray"
                          : "red"
                      }
                      text={
                        state?.record?.status === WAI_TING
                          ? "Đang Chờ"
                          : state?.record?.status === USED
                          ? "Đã Sử Dụng"
                          : "Bỏ Qua"
                      }
                    />
                  }
                />
              </Col>
              <Col span={12}>
                <TitleContent title="Số Thứ Tự" content={state?.record?.stt} />
              </Col>
              <Col span={12}>
                <TitleContent
                  title="Số Điện Thoại"
                  content={state?.record?.phoneNumber}
                />
              </Col>
              <Col span={12}>
                <TitleContent
                  title="Thời Gian Cấp"
                  content={state?.record?.grantTime}
                />
              </Col>
              <Col span={12}>
                <TitleContent
                  title="Địa chỉ email"
                  content={state?.record?.email}
                />
              </Col>
              <Col span={12}>
                <TitleContent
                  title="Hạn Sử Dụng"
                  content={state?.record?.HSD}
                />
              </Col>
            </Row>
          </>
        </LayoutContentDetail>
      }
    />
  );
};
export default Device;
