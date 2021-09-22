import * as React from "react";

type FormLabelTemplateProps = {
  keyLabel: string;
  modueleName: String;
};

const FormLabelTemplate: React.FC<FormLabelTemplateProps> = (
  props: FormLabelTemplateProps
) => {
  const { keyLabel, modueleName } = props;
  let classnName;
  switch (modueleName) {
    case "auth":
      classnName = "text-black font-semibold text-[16px] leading-[24px]";
      break;
    default:
      classnName = "text-gray-60 font-normal text-[11px] leading-[16px] ";
  }
  return <label className={classnName}>{keyLabel}</label>;
};

export default FormLabelTemplate;
