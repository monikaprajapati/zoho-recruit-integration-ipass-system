import * as React from "react";
import { Radio, Space } from "antd";
import { useTranslation } from "react-i18next";

const emailmask = (email: any) => {
  let emailArr = email.split("@");
  let star = "";
  for (let i = 0; i < emailArr[1].length; i++) {
    star += "*";
  }

  return `${emailArr[0]}@${star}`;
};

const numbermask = (phone: any) => {
  let phoneNumber = "";
  for (let i = 0; i < phone.length; i++) {
    if (i < 2 || phone.length - 5 < i) {
      phoneNumber += phone[i];
    } else {
      phoneNumber += "*";
    }
  }

  return phoneNumber;
};

const CRadio: React.FC<any> = (props: any) => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState("email");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value} size="large">
      <Space direction="vertical">
        <Radio value={"email"}>
          <label className=" font-semibold text-[16px] leading-[24px] text-white">
            {t("auth.label.verifyByEmail")}
          </label>
          <p className=" font-normal text-[16px] leading-[24px] text-white">
            {emailmask("jbizan@gmail.com")}
          </p>
        </Radio>
        <Radio value={"sms"}>
          <label className=" font-semibold text-[16px] leading-[24px] text-white">
            {t("auth.label.verfiyBySMS")}
          </label>
          <p className=" font-normal text-[16px] leading-[24px] text-white">
            {numbermask("+1 123 - 456 - 1234")}{" "}
          </p>
        </Radio>
      </Space>
    </Radio.Group>
  );
};

export default CRadio;
