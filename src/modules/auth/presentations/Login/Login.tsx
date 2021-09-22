import * as React from "react";
import { Form } from "antd";
import InputText from "../../../core/modules/ui/widgets/form/InputText";
import InputPassword from "../../../core/modules/ui/widgets/form/InputPassword/InputPassword";
import SubmitButton from "../../../core/modules/ui/widgets/form/CSubmitButton";
import FormLabelTemplate from "../../../core/modules/ui/templates/FormLabelTemplate";
import { SubmitButtonActionType } from "../../../core/models/enums/core.enums";
import ErrorMessage from "../../../core/modules/ui/custom/ErrorMessage";
import { useTranslation } from "react-i18next";

type LoginProps = {
  onSubmit: Function;
  error: boolean;
};

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { onSubmit, error } = props;
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [loader, setLoader] = React.useState(false);

  const handleOnSubmit = (formData: any) => {
    setLoader(!loader);
    onSubmit(formData);
  };

  return (
    <div className="mt-[65px] flex flex-col items-center">
      <Form
        form={form}
        name="basic"
        layout="vertical"
        className="w-[300px] mr-[2px] ml-[40px]"
        onFinish={handleOnSubmit}
        requiredMark={false}
      >
        <Form.Item
          label={
            <FormLabelTemplate
              keyLabel={t("auth.label.emailAddress")}
              modueleName="auth"
            ></FormLabelTemplate>
          }
          name="username"
          rules={[
            {
              required: true,
              message: t("auth.validation.emailRequired"),
            },
          ]}
        >
          <InputText
            type="authpage"
            placeholder={t("auth.placeholder.emailPlaceholder")}
            className="text-white h-[45px] w-[300px] placeholder-white-400::placeholder placeholder-opacity-5 text-[14px] leading-[21px] italic bg-white-600 border-white-600 rounded-[4px]"
          />
        </Form.Item>

        <Form.Item
          label={
            <FormLabelTemplate
              keyLabel={t("auth.label.password")}
              modueleName="auth"
            ></FormLabelTemplate>
          }
          name="password"
          rules={[
            { required: true, message: t("auth.validation.passwordRequired") },
          ]}
        >
          <InputPassword
            type="authpage"
            placeholder={t("auth.placeholder.passwordPlaceholder")}
          />
        </Form.Item>

        <Form.Item>
          <SubmitButton
            label={t("auth.action.login")}
            type={SubmitButtonActionType.AUTH}
            loading={loader}
          />
        </Form.Item>

        {error ? (
          <ErrorMessage message={t("auth.msg.warning.error")}></ErrorMessage>
        ) : null}
      </Form>
    </div>
  );
};

export default Login;
