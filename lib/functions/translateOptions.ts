import { BookingDetailsTranslations } from "@/models/BookingDetailsTranslations.model";
import { ContactDetailsTranslations } from "@/models/ContactDetailsTranslations.model";

interface Option {
  value: string;
  label: string;
}

export const translateTitleOptions = (
  titleOptions: Option[],
  translations: ContactDetailsTranslations | BookingDetailsTranslations
): Option[] => {
  return titleOptions.map((opt) => ({
    value: opt.value,
    label: (translations as Record<string, string>)[opt.label] || opt.label,
  }));
};