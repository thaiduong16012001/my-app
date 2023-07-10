import { Select, Form } from "antd";
import React from "react";
import "../../css/label.scss";
export interface Options  {
  label: string;
  value: string | boolean | number;
};

type Props = {
  innitTialValue?: string | boolean|number;
  label: string;
  options: Options[];
  onChange: any;
};
const SelectFilter: React.FC<Props> = ({
  innitTialValue,
  label,
  options,
  onChange,
}) => {
  const onChangeFC = (e: any) => {
    onChange(e);
  };
  return (
    <div>
    <div>{label}</div>
    <Select
    
      style={{ width: "100%" }}
      value={innitTialValue}
      options={options}
      onChange={onChangeFC}
    />
    </div>
  );
};
export default SelectFilter;
