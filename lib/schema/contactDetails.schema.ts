import * as yup from "yup";

export function getContactDetailsSchema(translations: {
  FIELD_REQUIRED: string;
  MAX_LENGTH_ERROR_FIRST_NAME: string;
  MAX_LENGTH_ERROR_LAST_NAME: string;
  PHONE_INVALID: string;
  EMAIL_INVALID: string;
}) {
  return yup.object().shape({
    title: yup.string().required(translations.FIELD_REQUIRED),
    firstName: yup.string().required(translations.MAX_LENGTH_ERROR_FIRST_NAME),
    lastName: yup.string().required(translations.MAX_LENGTH_ERROR_LAST_NAME),
    phone: yup
      .string()
      .required(translations.FIELD_REQUIRED)
      .matches(/^\+?[1-9]\d{6,14}$/, translations.PHONE_INVALID),
    email: yup
      .string()
      .email(translations.EMAIL_INVALID)
      .required(translations.EMAIL_INVALID),
  });
}
