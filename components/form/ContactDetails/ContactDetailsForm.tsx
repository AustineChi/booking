import { ChangeEvent } from "react";

import { Select } from "@/components/form-fields/Select/Select";
import { Input } from "@/components/form-fields/Input/Input";
import { PhoneInput } from "@/components/form-fields/PhoneInput/PhoneInput";
import { Button } from "@/components/form-fields/Button/Button";
import { ContactDetailsTranslations } from "@/models/ContactDetailsTranslations.model";

interface ContactDetailsFormProps {
  translations: ContactDetailsTranslations;
  titleValue: string;
  firstNameValue: string;
  lastNameValue: string;
  phoneValue: string;
  emailValue: string;
  selectOptions: { value: string; label: string }[];
  errors: Record<string, string | undefined>;
  onTitleChange: (value: string | undefined) => void;
  onFirstNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onLastNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export const ContactDetailsForm: React.FC<ContactDetailsFormProps> = ({
  translations,
  titleValue,
  firstNameValue,
  lastNameValue,
  phoneValue,
  emailValue,
  selectOptions,
  errors,
  onTitleChange,
  onFirstNameChange,
  onLastNameChange,
  onPhoneChange,
  onEmailChange,
  onSubmit,
}) => {
  return (
    <div className="px-2">
      <p className="text-xl text-text-secondary mt-2 mb-6 font-semibold text-sm">
        {translations.YOUR_CONTACT_DETAILS}
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <Select
          label={translations.TITLE}
          id="title"
          required
          options={selectOptions}
          value={titleValue}
          onChange={onTitleChange}
          error={!!errors.title}
          placeholder={translations.SELECT_A_TITLE}
          wrapperClassName="!w-[70px]"
        />
        <Input
          label={translations.FIRST_NAME}
          id="firstName"
          type="text"
          maxLength={20}
          required
          value={firstNameValue}
          onChange={onFirstNameChange}
          error={errors.firstName}
        />
        <Input
          label={translations.LAST_NAME}
          id="lastName"
          type="text"
          maxLength={30}
          required
          value={lastNameValue}
          onChange={onLastNameChange}
          error={errors.lastName}
        />
        <PhoneInput
          label={translations.PHONE_NUMBER}
          id="phone"
          required
          initialValue={phoneValue}
          onChange={onPhoneChange}
          initialCountryCode="GB"
          placeholder={translations.PHONE_NUMBER}
          error={errors.phone}
        />
        <Input
          label={translations.EMAIL_ADDRESS}
          id="email"
          type="email"
          required
          value={emailValue}
          onChange={onEmailChange}
          error={errors.email}
        />
        <Button type="submit" variant="primary" className="w-full">
          {translations.CONTINUE}
        </Button>
      </form>
    </div>
  );
};
