import React from "react";
import Searchs from "../../components/filters/search";
import ListGiveNumber from "../../components/tables/ListGiveNumber"
import LayoutContent from "../../components/layOut/layOutContent";
import BtnLinks from "../../components/buttons/remoteBtnAddtoLinks";
import { Router } from "../../Customrouter";
import {SEARCH_GIVE_NUMBER } from "../../util/configText";

const Service: React.FC = () => {
  return (
    <LayoutContent
      title="Danh Sách Câp số"
      Search={<Searchs type={SEARCH_GIVE_NUMBER} />}
      Content={<ListGiveNumber />}
      BtnLinks={
        <BtnLinks name="Cấp Số " path={Router.GiveNumber.Add.pathName} />
      }
    />
  );
};
export default Service;
