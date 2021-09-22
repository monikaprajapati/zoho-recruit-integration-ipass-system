import * as React from "react";
import { useTranslation } from "react-i18next";

const PageNotFound: React.FC<any> = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[65px] flex flex-col items-center">
      <p className=" not-italic font-medium text-[28px] leading-[42px] text-white text-center">
        {t("core.label.pageNotFound")}
      </p>
    </div>
  );
};

export default PageNotFound;
