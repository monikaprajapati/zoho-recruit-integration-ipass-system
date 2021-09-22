import { Upload } from "antd";
import * as React from "react";
import camera from "./../../../../../../../assets/images/png/camera.png";

type CImageUploadProps = {
  onUpdateImage: Function;
};

const CImageUpload: React.FC<CImageUploadProps> = (
  props: CImageUploadProps
) => {
  const { onUpdateImage } = props;

  const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChange = (info: any) => {
    getBase64(
      info.file.originFileObj,
      (imageUrl: React.SetStateAction<string>) => onUpdateImage(imageUrl)
    );
  };

  return (
    <Upload
      name="avatar"
      className="absolute bg-black-70 h-[40px] w-[80px] text-center rounded-br-[40px] rounded-bl-[40px] bottom-0"
      showUploadList={false}
      onChange={handleChange}
    >
      <img src={camera} alt="upload" className="mt-[5px]"></img>
    </Upload>
  );
};

export default CImageUpload;
