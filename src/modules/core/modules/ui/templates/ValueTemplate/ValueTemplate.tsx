import * as React from "react";

type ValueTemplateProps = {
  value: string;
};

const ValueTemplate: React.FC<ValueTemplateProps> = (
  props: ValueTemplateProps
) => {
  const { value } = props;
  return (
    <div className="text-[14px] leading-[21px] text-black-600 overflow-hidden whitespace-nowrap overflow-ellipsis max-w-full">
      {value}
    </div>
  );
};

export default ValueTemplate;
