import React from "react";
import { Control, FieldErrors, useController } from "react-hook-form";
import { useFormContext } from "@/context/FormContext";
import { ContactDetailsForm } from "./ContactDetailsForm";
import { titleOptions } from "@/lib/constants";
import { ChangeEvent } from "react";
import { ContactDetailsTranslations } from "@/models/ContactDetailsTranslations.model";
import { translateTitleOptions } from "@/lib/functions/translateOptions";
import { ContactFormData } from "@/models/ContactData.model";

interface ContactDetailsProps {
  translations: ContactDetailsTranslations;
  control: Control<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  handleSubmit: () => void;
}

export const ContactDetails = React.memo(
  ({ translations, control, errors, handleSubmit }: ContactDetailsProps) => {
    const { activeStep } = useFormContext();
    const selectOptions = translateTitleOptions(titleOptions, translations);

    const titleField = useController({ control, name: "title" });
    const firstNameField = useController({ control, name: "firstName" });
    const lastNameField = useController({ control, name: "lastName" });
    const phoneField = useController({ control, name: "phone" });
    const emailField = useController({ control, name: "email" });

    if (activeStep !== "contact") return null;

    return (
      <ContactDetailsForm
        translations={translations}
        titleValue={titleField.field.value}
        firstNameValue={firstNameField.field.value}
        lastNameValue={lastNameField.field.value}
        phoneValue={phoneField.field.value || ""}
        emailValue={emailField.field.value}
        selectOptions={selectOptions}
        errors={{
          title: errors.title?.message,
          firstName: errors.firstName?.message,
          lastName: errors.lastName?.message,
          phone: errors.phone?.message,
          email: errors.email?.message,
        }}
        onTitleChange={titleField.field.onChange}
        onFirstNameChange={(e: ChangeEvent<HTMLInputElement>) =>
          firstNameField.field.onChange(e.target.value)
        }
        onLastNameChange={(e: ChangeEvent<HTMLInputElement>) =>
          lastNameField.field.onChange(e.target.value)
        }
        onPhoneChange={(e: ChangeEvent<HTMLInputElement>) =>
          phoneField.field.onChange(e.target.value)
        }
        onEmailChange={(e: ChangeEvent<HTMLInputElement>) =>
          emailField.field.onChange(e.target.value)
        }
        onSubmit={handleSubmit}
      />
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.translations === nextProps.translations &&
      prevProps.errors === nextProps.errors &&
      prevProps.control === nextProps.control &&
      prevProps.handleSubmit === nextProps.handleSubmit
    );
  }
);

ContactDetails.displayName = "ContactDetails";
