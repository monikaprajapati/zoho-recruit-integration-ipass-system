import { DatePicker } from "antd";
import moment from "moment";
import * as React from "react";
import { useTranslation } from "react-i18next";
import Chevron from "./../../../../../../assets/images/png/Chevron.png";

// moment.locale("en", {
//   week: {
//     dow: 1,
//   },
// });

type EADatePickerFilterProps = {
  onDateSelction: Function;
};

const EADatePickerFilter: React.FC<EADatePickerFilterProps> = (
  props: EADatePickerFilterProps
) => {
  const { t } = useTranslation();
  const { onDateSelction } = props;
  const [isDatePickerOpened, setIsDatePickerOpened] = React.useState(false);
  let selectedDate = moment().toDate();

  const showDatePicker = () => {
    setIsDatePickerOpened(true);
  };

  const handleDatePickerChange = (date: any, dateString: any) => {
    selectedDate = date._d;
  };

  const onApply = () => {
    setIsDatePickerOpened(false);
    onDateSelction(selectedDate);
  };
  return (
    <div className="text-blue-500 border-[1px] border-blue-500 py-[5px] pl-[10px] pr-[3px] relative">
      <span
        className="ant-dropdown-link font-normal text-[14px] leading-[21px] cursor-pointer"
        onClick={showDatePicker}
      >
        {t("mission.label.selectTime")}
        <img
          src={Chevron}
          alt="arrow"
          className="inline-block relative pl-[6px] top-[-1px] "
        ></img>
      </span>
      <DatePicker
        renderExtraFooter={() => (
          <span
            className="text-white text-[14px] leading-[21px] font-semibold px-[24px] py-[10px] bg-blue-500 rounded-[100px] cursor-pointer"
            onClick={onApply}
          >
            {t("mission.action.apply")}
          </span>
        )}
        //defaultValue={moment()}
        //ormat="YYYY/MM/DD"
        picker="week"
        open={isDatePickerOpened}
        suffixIcon={
          <img
            src={Chevron}
            alt="arrow"
            className="inline-block relative top-[1px] left-[-5px] h-[16px] w-[16px]"
          ></img>
        }
        onChange={(date, dateString) =>
          handleDatePickerChange(date, dateString)
        }
        placeholder={t("mission.label.selectTime")}
      />
    </div>
  );
};

export default EADatePickerFilter;
