import { ContactFormData } from "@/models/ContactData.model";
import { useFormContext as useReactHookFormContext } from "react-hook-form";

export function useContactFormFields() {
  const { control } = useReactHookFormContext<ContactFormData>();

  const getFieldProps = <T extends keyof ContactFormData>(name: T) => ({
    name,
    control,
  });

  return {
    title: getFieldProps("title"),
    firstName: getFieldProps("firstName"),
    lastName: getFieldProps("lastName"),
    phone: getFieldProps("phone"),
    email: getFieldProps("email"),
  };
}
