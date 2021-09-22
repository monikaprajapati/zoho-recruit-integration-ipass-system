import { Checkbox } from "antd";
import * as React from "react";

type CheckBoxProps = {
  //
};

const CheckBox: React.FC<any> = (props: any) => {
  const { onChange, value, label, checked } = props;
  const handleOnChange = (e: any) => {
    onChange(e);
  };

  return (
    <Checkbox onChange={handleOnChange} value={value} checked={checked}>
      <span className="text-[12px] leading-[18px] text-gray-70">{label}</span>
    </Checkbox>
  );
};

export default CheckBox;
