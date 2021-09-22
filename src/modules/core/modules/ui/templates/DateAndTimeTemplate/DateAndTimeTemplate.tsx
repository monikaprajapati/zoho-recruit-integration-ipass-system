import * as React from "react";
import moment from "moment";
import { DateAndTime } from "../../../../models/enums/core.enums";

type DateAndTimeTemplateProps = {
  date: any;
};

const DateAndTimeTemplate: React.FC<DateAndTimeTemplateProps> = (
  props: DateAndTimeTemplateProps
) => {
  const { date } = props;
  return (
    <span className="text-[14px] font-normal leading-[21px] text-black-600 flex flex-col items-baseline">
      {date ? (
        <React.Fragment>
          <span>{moment(date).format(DateAndTime["DD.MM.YY"])}</span>
          <span className="text-[13px] text-gray-400">
            {moment(date).format(DateAndTime["h:mmA"])}
          </span>
        </React.Fragment>
      ) : (
        "--"
      )}
    </span>
  );
};

export default DateAndTimeTemplate;
