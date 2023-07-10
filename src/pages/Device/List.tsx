import React from "react";
import Searchs from "../../components/filters/search";
import ListDivice from "../../components/tables/ListDivice";
import LayoutContent from "../../components/layOut/layOutContent";
import BtnLinks from "../../components/buttons/remoteBtnAddtoLinks";
import { Router } from "../../Customrouter";
import { SEARCH_DEVICES } from "../../util/configText";
const Device: React.FC = () => {
  return (
    <LayoutContent
      title="Danh Sách Thiết Bị"
      Search={<Searchs type={SEARCH_DEVICES} />}
      Content={<ListDivice />}
      BtnLinks={
        <BtnLinks name="Thêm Thiết Bị " path={Router.Device.Add.pathName} />
      }
    />
  );
};
export default Device;
