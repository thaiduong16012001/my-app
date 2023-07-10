import React from "react";
import { UPDATE_FORM } from "../../util/configText";
import FormAccount from "../../components/Form/FormAccount";
import LayoutContent from "../../components/layOut/layOutContent";
const Device: React.FC = () => {
  return (
    <LayoutContent
      title="Quản Lý Tài Khoản"
      Content={<FormAccount type={UPDATE_FORM} />}
    />
  );
};
export default Device;
