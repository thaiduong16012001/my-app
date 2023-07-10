import React from "react";
import Searchs from "../../components/filters/search";
import ListReport from "../../components/tables/ListReport";
import LayoutContent from "../../components/layOut/layOutContent";
import BtnLinks from "../../components/buttons/remoteBtnAddtoLinks";
import { Router } from "../../Customrouter";
import { SEARCH_REPORTS } from "../../util/configText";

const Service: React.FC = () => {
  return (
    <LayoutContent
      title="Báo Cáo"
      Search={<Searchs type={SEARCH_REPORTS} />}
      Content={<ListReport />}
      BtnLinks={<BtnLinks name="Tải xuống " path={Router.Report.List.pathName} />}
    />
  );
};
export default Service;
