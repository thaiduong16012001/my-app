import React from "react";
import Searchs from "../../components/filters/search";
import ListActivelog from "../../components/tables/ListActivelog";
import LayoutContent from "../../components/layOut/layOutContent";

import { SEARCH_REPORTS } from "../../util/configText";

const Service: React.FC = () => {
  return (
    <LayoutContent
      title="Nhật Ký Người Dùng"
      //   Search={<Searchs type={SEARCH_REPORTS} />}
      Content={<ListActivelog />}
    />
  );
};
export default Service;
