import { Button } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";

type LinkButtonProps = {
  label: string;
  onClick: Function;
};

const LinkButton: React.FC<LinkButtonProps> = (
  props: LinkButtonProps
) => {
  const { label, onClick } = props;
  const { t } = useTranslation();
  let className;

  switch (label) {
    case t("uav.action.cancel"):
      className = "underline";
      break;
    case t("users.action.edit"):
      className = "underline mr-[-15px]";
      break;
    case t("airfieldFeature.action.editAirfield"):
      className = "underline mr-[-15px]";
      break;
    case t("mission.action.clearAll"):
      className = "underline text-gray-90 text-[14px] leading-[21px] p-0";
      break;
    case t("uav.action.archiveUAV"):
      className = "underline text-red-500";
      break;
    case t("users.action.deleteUser"):
      className = "underline text-red-500";
      break;
    case t("airfieldFeature.action.deleteFeature"):
      className = "underline text-red-500";
      break;
    case t("missionType.action.deleteMission"):
      className = "underline text-red-500";
      break;
    case t("auth.action.resendCode"):
      className =
        "hover:text-yellow-200 bg-transparent py-[10px] px-[24px] w-[300px] h-[41px] border-0 text-indigo-100 text-[16px] leading-[24px]";
      break;
    case t("users.action.editUser"):
      className = "underline float-right pr-0";
      break;
    case t("account.action.editProfile"):
      className = "underline float-right pr-0";
      break;
    default:
      className = "underline float-right mr-[15px]";
  }

  const onClickFunction = () => {
    onClick();
  };

  return (
    <Button onClick={onClickFunction} type="link" className={className}>
      {label}
    </Button>
  );
};

export default LinkButton;
