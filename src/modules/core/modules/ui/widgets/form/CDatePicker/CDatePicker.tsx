import { DatePicker } from "antd";
import moment from "moment";
import * as React from "react";
import { useTranslation } from "react-i18next";
import Chevron from "./../../../../../../../assets/images/png/Chevron.png";
import "./CDatePicker.less";

type CDatePickerProps = {
  //
};

const CDatePicker: React.FC<CDatePickerProps> = (
  props: CDatePickerProps
) => {
  const { t } = useTranslation();
  //const { onDateSelction } = props;

  //let selectedDate = moment().toDate();

  const handleDatePickerChange = (date: any, dateString: any) => {
    //selectedDate = date._d;
  };

  return (
    <DatePicker
      clearIcon={false}
      className="rounded bg-indigo-10 h-[45px] border-none italic font-normal text-[14px] leading-[21px] text-indigo-55 mt-[-1px]"
      suffixIcon={
        <img
          src={Chevron}
          alt="arrow"
          className="inline-block relative top-[1px] left-[-5px] h-[16px] w-[16px]"
        ></img>
      }
      onChange={(date, dateString) => handleDatePickerChange(date, dateString)}
      placeholder={t("mission.label.selectTime")}
    />
  );
};

export default CDatePicker;
