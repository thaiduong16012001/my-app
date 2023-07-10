import React from "react";
import BtnLinks from "../../components/buttons/remoteBtnAddtoLinks";
import LayoutContentDetail from "../../components/contents/LayoutContentDetail";
import LayoutContent from "../../components/layOut/layOutContent";
import { useLocation } from "react-router-dom";
import { Router } from "../../Customrouter";
import { Row, Col } from "antd";
import TitleContent from "../../components/TitleContent";
import TableServiceDetail from "../../components/tables/ListServicesDetail";
import { SEARCH_DEVICES, SEARCH_SERVERS } from "../../util/configText";

import Searchs from "../../components/filters/search";
const ServecieDetail: React.FC = () => {
  const { state } = useLocation();

  return (
    <LayoutContent
      title="Quản Lý Dịch Vụ"
      BtnLinks={
        <BtnLinks
          name="Cập nhật thiết bị"
          path={Router.Service.Edit.pathName}
          state={state}
        />
      }
      Content={
        <Row gutter={20} style={{ width: "100%" }}>
          <Col span={8}>
            <LayoutContentDetail title="Thông Tin Dịch Vụ ">
              <Row gutter={[16, 30]}>
                <Col span={24}>
                  <TitleContent
                    title="Mã Dịch Vụ"
                    content={state?.record?.id}
                  />
                </Col>
                <Col span={24}>
                  <TitleContent
                    title="Tên Dịch Vụ"
                    content={state?.record?.name}
                  />
                </Col>
                <Col span={24}>
                  <TitleContent
                    title="Mô tả"
                    content={state?.record?.description}
                  />
                </Col>
              </Row>
            </LayoutContentDetail>
          </Col>
          <Col span={16}>
            <div className="boxForm">
              <Searchs type={SEARCH_SERVERS} />
              <TableServiceDetail id={state?.record?.id} />
            </div>
          </Col>
        </Row>
      }
    />
  );
};
export default ServecieDetail;
