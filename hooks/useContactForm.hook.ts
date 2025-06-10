import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormContext } from "@/context/FormContext";
import { getContactDetailsSchema } from "@/lib/schema/contactDetails.schema";

export interface ContactFormData {
  title: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface UseContactFormProps {
  translations: {
    FIELD_REQUIRED: string;
    MAX_LENGTH_ERROR_FIRST_NAME: string;
    MAX_LENGTH_ERROR_LAST_NAME: string;
    PHONE_INVALID: string;
    EMAIL_INVALID: string;
  };
}

export function useContactForm({ translations }: UseContactFormProps) {
  const { formData, setFormData, setActiveStep } = useFormContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(getContactDetailsSchema(translations)),
    defaultValues: formData.contact ?? {
      title: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    setFormData({ ...formData, contact: data });
    setActiveStep("booking");
  };

  return { control, handleSubmit: handleSubmit(onSubmit), errors };
}
