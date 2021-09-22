import { Button } from "antd";
import * as React from "react";
import { ButtonActionType } from "../../../../models/enums/core.enums";
import addIcon from "./../../../../../../assets/images/png/add.png";

type ButtonProps = {
  type: string;
  onClick: Function;
  label: string;
};

const CButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { type, onClick, label } = props;

  let btnClass;
  let iconClass;
  let iconImg;

  switch (type) {
    case ButtonActionType.ADD:
      btnClass = "bg-blue-500 rounded-[100px] h-[32px] border-0 pl-[23px]";
      iconClass = "h-[10px] w-[10px] absolute left-[10px] top-[11px]";
      iconImg = addIcon;
      break;
    default:
      btnClass =
        " bg-yellow-300 py-[10px] px-[24px] w-[300px] h-[41px] rounded-[100px] border-0 text-indigo-900";
  }

  const onClickFunction = () => {
    onClick();
  };
  return (
    <Button
      onClick={onClickFunction}
      className={btnClass}
      type="primary"
      icon={<img src={iconImg} alt="icon" className={iconClass}></img>}
    >
      {label}
    </Button>
  );
};

export default CButton;
