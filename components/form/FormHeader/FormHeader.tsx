"use client";

interface FormHeaderProps {
  translations: {
    REQUEST_A_GROUP_BOOKING: string;
    PLANNING_GROUP_EVENT: string;
  };
}

export const FormHeader: React.FC<FormHeaderProps> = ({ translations }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold leading-[32px]">
        {translations.REQUEST_A_GROUP_BOOKING}
      </h1>
      <div className=" py-10 text-sm font-normal">{translations.PLANNING_GROUP_EVENT} </div>
    </div>
  );
};
