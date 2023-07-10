import React from "react";
import Searchs from "../../components/filters/search";
import ListRole from "../../components/tables/ListRole";
import LayoutContent from "../../components/layOut/layOutContent";
import BtnLinks from "../../components/buttons/remoteBtnAddtoLinks";
import { Router } from "../../Customrouter";
import { SEARCH_GIVE_NUMBER } from "../../util/configText";

const Service: React.FC = () => {
  return (
    <LayoutContent
      title="Danh Sách Vai Trò"
      Search={<Searchs type={SEARCH_GIVE_NUMBER} />}
      Content={<ListRole />}
      BtnLinks={
        <BtnLinks name="Thêm Vai Trò " path={Router.ManagerRole.Add.pathName} />
      }
    />
  );
};
export default Service;
