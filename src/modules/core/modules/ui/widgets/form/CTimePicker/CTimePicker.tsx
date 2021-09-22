import { TimePicker } from "antd";
import moment from "moment";
import * as React from "react";
import { useTranslation } from "react-i18next";
import Chevron from "./../../../../../../../assets/images/png/Chevron.png";

type CTimePickerProps = { onTimeChange: Function };

const CTimePicker: React.FC<CTimePickerProps> = (
  props: CTimePickerProps
) => {
  const { t } = useTranslation();
  const { onTimeChange } = props;

  //let selectedDate = moment().toDate();

  const handleTimeChange = (date: any, dateString: any) => {
    onTimeChange(date._d);
    //selectedDate = date._d; `
  };

  return (
    <TimePicker
      clearIcon={false}
      className="rounded bg-indigo-10 h-[45px] border-none italic font-normal text-[14px] leading-[21px] text-indigo-55 mt-[-1px]"
      use12Hours
      format="h:mm A"
      suffixIcon={
        <img
          src={Chevron}
          alt="arrow"
          className="inline-block relative top-[1px] left-[-5px] h-[16px] w-[16px]"
        ></img>
      }
      onChange={(date, dateString) => handleTimeChange(date, dateString)}
      placeholder={t("mission.label.selectTime")}
    />
  );
};

export default CTimePicker;
