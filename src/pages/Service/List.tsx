import React from "react";
import Searchs from "../../components/filters/search";
import ListServices from "../../components/tables/ListServices";
import LayoutContent from "../../components/layOut/layOutContent";
import BtnLinks from "../../components/buttons/remoteBtnAddtoLinks";
import { Router } from "../../Customrouter";
import { SEARCH_SERVERS } from "../../util/configText";

const Service: React.FC = () => {
  return (
    <LayoutContent
      title="Danh Sách Dịch vụ"
      Search={<Searchs type={SEARCH_SERVERS} />}
      Content={<ListServices />}
      BtnLinks={
        <BtnLinks name="Thêm dịch vụ " path={Router.Service.Add.pathName} />
      }
    />
  );
};
export default Service;
