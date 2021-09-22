import moment from "moment";
import * as React from "react";
import { DateAndTime } from "../../../../models/enums/core.enums";

type DateTemplateProps = {
  date: any;
};

const DateTemplate: React.FC<DateTemplateProps> = (
  props: DateTemplateProps
) => {
  const { date } = props;
  return (
    <span className="text-[14px] font-normal leading-[21px] text-black-600 flex flex-col items-baseline">
      {date ? (
        <React.Fragment>
          <span>{moment(date).format(DateAndTime["DD.MM.YY"])}</span>
        </React.Fragment>
      ) : (
        "--"
      )}
    </span>
  );
};

export default DateTemplate;
