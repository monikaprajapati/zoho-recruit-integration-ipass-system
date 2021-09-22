import * as React from "react";
import { Input } from "antd";

const InputPassword: React.FC<any> = (props: any) => {
  let btnClass;
  switch (props.type) {
    case "authpage":
      btnClass =
        "text-black h-[45px] w-[300px] placeholder-white-400::placeholder placeholder-opacity-5 text-[14px] leading-[21px] italic bg-white-600 border-white-600 rounded-[4px]";
      break;
    default:
      btnClass =
        "text-indigo-70 h-[45px] placeholder-indigo-55::placeholder placeholder-opacity-5 text-[14px] leading-[21px] italic bg-indigo-10 border-0 border-indigo-10 rounded-[4px]";
  }

  return (
    <React.Fragment>
      <Input.Password
        visibilityToggle={false}
        {...props}
        className={btnClass}
      />
    </React.Fragment>
  );
};

export default InputPassword;
