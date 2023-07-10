import React from "react";
import Searchs from "../../components/filters/search";
import ListAccount from "../../components/tables/ListAccount";
import LayoutContent from "../../components/layOut/layOutContent";
import BtnLinks from "../../components/buttons/remoteBtnAddtoLinks";
import { Router } from "../../Customrouter";
import { SEARCH_DEVICES } from "../../util/configText";
const Device: React.FC = () => {
  return (
    <LayoutContent
      title="Danh Sách Tài Khoản"
      Search={<Searchs type={SEARCH_DEVICES} />}
      Content={<ListAccount />}
      BtnLinks={
        <BtnLinks
          name="Thêm Tài Khoản "
          path={Router.ManagerAccount.Add.pathName}
        />
      }
    />
  );
};
export default Device;
