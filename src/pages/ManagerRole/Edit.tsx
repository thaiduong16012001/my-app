import React from "react";
import { UPDATE_FORM } from "../../util/configText";
import FormRole from "../../components/Form/FormRole";
import LayoutContent from "../../components/layOut/layOutContent";
const Device: React.FC = () => {
  return (
    <LayoutContent
      title="Quản Lý Vai Trò"
      Content={<FormRole type={UPDATE_FORM} />}
    />
  );
};
export default Device;
