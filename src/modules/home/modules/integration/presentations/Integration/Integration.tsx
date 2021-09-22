import * as React from "react";
import { Button, Select, Input, Form, Alert } from "antd";
import FormLabelTemplate from "../../../../../core/modules/ui/templates/FormLabelTemplate";
import { API_URLS } from "../../../../../core/models/enums/core.enums";
import "./Integration.less";

const { Option } = Select;

type IntegrationProps = {
  showElements: Boolean;
  alertMessage: String;
  modulesData: Object;
  onSubmit: Function;
};

const Integration: React.FC<IntegrationProps> = (props: IntegrationProps) => {
  const redirectUrl =
    `https://accounts.zoho.in/oauth/v2/auth?scope=ZohoRecruit.modules.ALL,ZohoRecruit.notifications.ALL&client_id=1000.3K4KZ1OECK5V5PNMT0UZKSU4KZP73H&response_type=code&access_type=offline&redirect_uri=${API_URLS.INTEGRATION}/oauth/redirect`;

  const { showElements, modulesData, onSubmit, alertMessage } = props;
  let option;
  const [form] = Form.useForm();

  if (modulesData instanceof Array) {
    option = modulesData.map((item: any, index: number) => {
      return (
        <Option key={index} value={item}>
          {item}
        </Option>
      );
    });
  }

  const handleOnSubmit = (formData: any) => {
    onSubmit(formData);
  };

  return (
    <div className="integration-add-form">
      {!showElements && <a href={redirectUrl}>Login to Zoho Recruit</a>}
      {alertMessage !== "" && (
        <Alert message={alertMessage} type="success" closable />
      )}
      {showElements && (
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
                keyLabel="Module"
                modueleName="integration"
              ></FormLabelTemplate>
            }
            name="module"
            rules={[
              {
                required: true,
                message: "Modules required",
              },
            ]}
          >
            <Select size="large" placeholder="Select Module">
              {option}
            </Select>
          </Form.Item>

          <Form.Item
            label={
              <FormLabelTemplate
                keyLabel="Event"
                modueleName="integration"
              ></FormLabelTemplate>
            }
            name="event"
            rules={[
              {
                required: true,
                message: "event required",
              },
            ]}
          >
            <Select style={{ width: 300 }} placeholder="Select Event">
              <Option value="create">On Created</Option>
              <Option value="edit">On Updated</Option>
              <Option value="all">On Created/Updated</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label={
              <FormLabelTemplate
                keyLabel="Url"
                modueleName="integration"
              ></FormLabelTemplate>
            }
            name="url"
            rules={[
              {
                required: true,
                message: "third party required",
              },
              {
                type: "url",
                message: "This field must be a valid url.",
              },
            ]}
          >
            <Input placeholder="Enter 3rd Party URL" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default Integration;
