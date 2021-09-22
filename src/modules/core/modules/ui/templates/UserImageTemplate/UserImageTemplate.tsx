import * as React from "react";

type UserImageTemplateProps = {
  userImage: string;
  firstName: string;
  lastName: string;
};

const UserImageTemplate: React.FC<UserImageTemplateProps> = (
  props: UserImageTemplateProps
) => {
  const { userImage, firstName, lastName } = props;
  return (
    <div className="flex items-center">
      <div>
        <div className="rounded-[50%] w-[50px] h-[50px] overflow-hidden">
          <img
            src={userImage}
            alt={firstName}
            className="w-[100%] h-auto"
          ></img>
        </div>
      </div>

      <p className="ml-[10px]">
        {firstName} {lastName}
      </p>
    </div>
  );
};

export default UserImageTemplate;
