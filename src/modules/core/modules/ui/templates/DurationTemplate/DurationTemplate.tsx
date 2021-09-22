import moment from "moment";
import * as React from "react";
import { DateAndTime } from "../../../../models/enums/core.enums";

type DurationTemplateProps = {
  startTime: any;
  endTime: any;
};

const DurationTemplate: React.FC<DurationTemplateProps> = (
  props: DurationTemplateProps
) => {
  const { startTime, endTime } = props;

  const secondsToHms = (d: any) => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes  ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay || "0 Minutes";
  };

  return (
    <div className="text-[14px] leading-[21px] text-black-600 overflow-hidden whitespace-nowrap overflow-ellipsis max-w-full">
      <span>
        {secondsToHms(moment(endTime).diff(moment(startTime), "minutes"))}
      </span>
    </div>
  );
};

export default DurationTemplate;
