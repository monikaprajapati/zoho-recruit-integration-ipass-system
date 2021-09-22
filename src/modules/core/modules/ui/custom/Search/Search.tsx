import { Button, Form } from "antd";
import * as React from "react";
import InputText from "../../widgets/form/InputText";
import searchIcon from "./../../../../../../assets/images/png/search.png";

type SearchProps = {
  placeholder: string;
  onSearch: Function;
};

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const { placeholder, onSearch } = props;
  const [form] = Form.useForm();

  const handleOnSubmit = (formData: any) => {
    onSearch(formData.search);
  };

  return (
    <div className="h-[32px] w-[230px] border-[1px] border-gray-40 rounded-[100px] relative">
      <Form
        form={form}
        name="basic"
        layout="vertical"
        onFinish={handleOnSubmit}
        requiredMark={false}
      >
        <Form.Item name="search">
          <InputText type="searchbox" placeholder={placeholder}></InputText>
        </Form.Item>

        <Button
          htmlType="submit"
          className="absolute top-0 left-[10px] cursor-pointer p-0 bg-transparent border-0"
        >
          <img src={searchIcon} alt="search"></img>
        </Button>
      </Form>
    </div>
  );
};

export default Search;
