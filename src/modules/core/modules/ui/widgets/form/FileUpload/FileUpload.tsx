import { Upload } from "antd";
import * as React from "react";
import "./FileUpload.less";

type FileUploadProps = {
  onUpload: Function;
};

const FileUpload: React.FC<FileUploadProps> = (props: any) => {
  const { onUpload } = props;
  let fileData: any = [];

  const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChange = (info: any) => {
    if (info.event === undefined) {
      return false;
    }
    getBase64(
      info.file.originFileObj,
      (imageUrl: React.SetStateAction<string>) => onUpload(imageUrl, fileData)
    );
  };

  const beforeUpload = (file: any) => {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      fileData = e.target.result;
    };

    reader.readAsText(file);
    // Prevent upload
    return false;
  };

  return (
    <Upload
      name="file-upload"
      onChange={handleChange}
      showUploadList={false}
      beforeUpload={(file) => {
        beforeUpload(file);
      }}
    >
      {props.children}
    </Upload>
  );
};

export default FileUpload;
