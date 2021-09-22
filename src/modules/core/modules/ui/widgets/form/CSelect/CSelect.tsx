import { Select } from "antd";
import * as React from "react";
import "./CSelect.less";

const { Option } = Select;

type SelectProps = {
  placeholder: string;
  options: Array<any>;
  onChange: Function;
};

const CSelect: React.FC<SelectProps> = (props: SelectProps) => {
  const { placeholder, options, onChange } = props;

  const handleChange = (value: string) => {
    onChange(value);
  };

  let option;

  if (options instanceof Array) {
    option = options.map((item: any, index: number) => {
      return (
        <Option key={index} value={item}>
          {item}
        </Option>
      );
    });
  }
  return (
    <Select
      onChange={handleChange}
      placeholder={placeholder}
      labelInValue
      defaultValue="Pilot"
      className="text-indigo-70 h-[45px] placeholder-indigo-55::placeholder placeholder-opacity-5 text-[14px] leading-[21px] italic bg-indigo-10 border-0 border-indigo-10 rounded-[4px]"
    >
      {option}
    </Select>
  );
};

export default CSelect;
