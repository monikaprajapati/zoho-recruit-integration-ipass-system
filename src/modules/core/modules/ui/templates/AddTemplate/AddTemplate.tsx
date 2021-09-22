import * as React from "react";
import addIcon from "../../../../../../assets/images/png/addicon.png";

type AddTemplateProps = {
  label: string;
  onAdd: Function;
};

const AddTemplate: React.FC<AddTemplateProps> = (props: AddTemplateProps) => {
  const { label, onAdd } = props;

  return (
    <div
      className="w-[31%] rounded-[4px] border-[1px] border-blue-450 cursor-pointer"
      onClick={() => {
        onAdd();
      }}
    >
      <div className="h-[65px] flex items-center justify-center">
        <img src={addIcon} alt={label} />
      </div>
      <p className="bg-indigo-60 text-white text-center font-normal not-italic text-[11px] leading-[16px] py-[4px] block">
        {label}
      </p>
    </div>
  );
};

export default AddTemplate;
