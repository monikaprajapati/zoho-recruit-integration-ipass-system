import * as React from "react";

type UserTypeTemplateProps = {
  value: Array<any>;
};

const UserTypeTemplate: React.FC<UserTypeTemplateProps> = (
  props: UserTypeTemplateProps
) => {
  const { value } = props;

  return (
    <div>
      {value.map((e, i) => {
        return <p key={i}>{e}</p>;
      })}
    </div>
  );
};

export default UserTypeTemplate;
