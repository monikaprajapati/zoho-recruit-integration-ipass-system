import * as React from "react";
import { Button } from "antd";
import { SubmitButtonActionType } from "../../../../../models/enums/core.enums";
import "./CSubmitButton.less";
import Spinner from "../../../custom/Spinner";

type InputButtonProps = {
  label: string;
  type: string;
  loading: boolean;
};

const CSubmitButton: React.FC<InputButtonProps> = (
  props: InputButtonProps
) => {
  const { label, type, loading } = props;
  let className;

  switch (type) {
    case SubmitButtonActionType.DELETE:
      className =
        "bg-red-500 py-[10px] px-[24px] w-[200px] h-[41px] border-0 rounded-[100px] font-semibold text-white font-semibold text-[14px] leading-[21px] block m-auto relative";
      break;
    case SubmitButtonActionType.EDIT:
      className =
        "bg-white py-[10px] px-[24px] w-[200px] h-[41px] border-[1px] border-indigo-25 rounded-[100px] font-semibold text-indigo-25 text-[14px] leading-[21px] block m-auto relative";
      break;
    case SubmitButtonActionType.CREATE:
      className =
        "bg-green-400 py-[10px] px-[24px] w-[200px] h-[41px] border-0 rounded-[100px] font-semibold text-white text-[14px] leading-[21px] block m-auto relative";
      break;
    case SubmitButtonActionType.AUTH:
      className =
        " bg-yellow-300 py-[10px] px-[24px] w-[300px] h-[41px] rounded-[100px] border-0 text-indigo-900 relative";
      break;
    default:
      className =
        " bg-yellow-300 py-[10px] px-[24px] w-[300px] h-[41px] rounded-[100px] border-0 text-indigo-900 relative";
  }
  return (
    <React.Fragment>
      <Button type="primary" htmlType="submit" className={className}>
        {label}
        {loading ? <Spinner></Spinner> : null}
      </Button>
    </React.Fragment>
  );
};

export default CSubmitButton;
