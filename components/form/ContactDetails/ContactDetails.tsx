import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
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

    if (activeStep !== "contact") return null;

    return (
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Controller
            name="firstName"
            control={control}
            render={({ field: firstNameField }) => (
              <Controller
                name="lastName"
                control={control}
                render={({ field: lastNameField }) => (
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: phoneField }) => (
                      <Controller
                        name="email"
                        control={control}
                        render={({ field: emailField }) => (
                          <ContactDetailsForm
                            translations={translations}
                            titleValue={field.value}
                            firstNameValue={firstNameField.value}
                            lastNameValue={lastNameField.value}
                            phoneValue={phoneField.value || ""}
                            emailValue={emailField.value}
                            selectOptions={selectOptions}
                            errors={{
                              title: errors.title?.message,
                              firstName: errors.firstName?.message,
                              lastName: errors.lastName?.message,
                              phone: errors.phone?.message,
                              email: errors.email?.message,
                            }}
                            onTitleChange={(value: string | undefined) =>
                              field.onChange(value)
                            }
                            onFirstNameChange={(
                              e: ChangeEvent<HTMLInputElement>
                            ) => firstNameField.onChange(e.target.value)}
                            onLastNameChange={(
                              e: ChangeEvent<HTMLInputElement>
                            ) => lastNameField.onChange(e.target.value)}
                            onPhoneChange={(e: ChangeEvent<HTMLInputElement>) =>
                              phoneField.onChange(e.target.value)
                            }
                            onEmailChange={(e: ChangeEvent<HTMLInputElement>) =>
                              emailField.onChange(e.target.value)
                            }
                            onSubmit={handleSubmit}
                          />
                        )}
                      />
                    )}
                  />
                )}
              />
            )}
          />
        )}
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
