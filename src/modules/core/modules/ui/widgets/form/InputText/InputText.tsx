import * as React from "react";
import { Input } from "antd";

const InputText: React.FC<any> = (props: any) => {
  let btnClass;
  switch (props.type) {
    case "authpage":
      btnClass =
        "text-black h-[45px] w-[300px] placeholder-white-400::placeholder placeholder-opacity-5 text-[14px] leading-[21px] italic bg-white-600 border-white-600 rounded-[4px] focus:border-transparent focus:border-r-0 focus:border-0 focus:shadow-none";
      break;
    case "searchbox":
      btnClass =
        "text-blue-500 h-[31px] w-[230px] placeholder-gray-40::placeholder placeholder-opacity-5 text-[11px] leading-[16px] bg-transparent border-0 pl-[30px] focus:border-transparent  focus:border-r-0 focus:border-0 focus:shadow-none";
      break;
    default:
      btnClass =
        "text-indigo-70 h-[45px] placeholder-indigo-55::placeholder placeholder-opacity-5 text-[14px] leading-[21px] italic bg-indigo-10 border-0 border-indigo-10 rounded-[4px] focus:border-transparent focus:border-r-0 focus:border-0 focus:shadow-none";
  }

  return (
    <React.Fragment>
      <Input {...props} className={btnClass} />
    </React.Fragment>
  );
};

export default InputText;
