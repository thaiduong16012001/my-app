import React from "react";
import { ADD_FORM } from "../../util/configText";
import FormAccount from "../../components/Form/FormAccount";
import LayoutContent from "../../components/layOut/layOutContent";
const Device: React.FC = () => {
  return (
    <LayoutContent
      title="Quản Lý Tài Khoản"
      Content={<FormAccount type={ADD_FORM} />}
    />
  );
};
export default Device;
