import { useController, Control } from "react-hook-form";
import { useFormContext } from "@/context/FormContext";
import {
  bookerTypeOptions,
  stayTypeOptions,
  reasonOptions,
} from "@/lib/constants";
import { translateTitleOptions } from "@/lib/functions/translateOptions";
import { BookingDetailsTranslations } from "@/models/BookingDetailsTranslations.model";
import { BookingFormData } from "@/models/bookingData.model";

interface DateRange {
  checkIn?: Date | undefined;
  checkOut?: Date | undefined;
}

export function useBookingDetails(
  translations: BookingDetailsTranslations,
  control: Control<BookingFormData>
) {
  const { activeStep } = useFormContext();

  const bookerTypeField = useController({ control, name: "bookerType" });
  const stayTypeField = useController({ control, name: "stayType" });
  const schoolYouthBookingField = useController({
    control,
    name: "schoolYouthBooking",
  });
  const reasonField = useController({ control, name: "reason" });
  const hotelField = useController({ control, name: "hotel" });
  const dateRangeField = useController({ control, name: "dateRange" });
  const packageTypeField = useController({ control, name: "packageType" });

  const bookerTypeOptionsTranslated = translateTitleOptions(
    bookerTypeOptions,
    translations
  );
  const stayTypeOptionsTranslated = translateTitleOptions(
    stayTypeOptions,
    translations
  );
  const reasonOptionsTranslated = translateTitleOptions(
    reasonOptions,
    translations
  );
  const packageTypeOptionsTranslated = [
    {
      value: "premierInnBreakfast",
      label: translations.PREMIER_INN_BREAKFAST,
    },
    { value: "mealDeal", label: translations.MEAL_DEAL },
  ];

  const errors: Record<string, string | undefined> = {
    bookerType: bookerTypeField.fieldState.error?.message,
    stayType: stayTypeField.fieldState.error?.message,
    schoolYouthBooking: schoolYouthBookingField.fieldState.error?.message,
    reason: reasonField.fieldState.error?.message,
    hotel: hotelField.fieldState.error?.message,
    dateRange: dateRangeField.fieldState.error?.message,
    packageType: packageTypeField.fieldState.error?.message,
  };

  return {
    shouldRender: activeStep === "booking",
    bookerType: bookerTypeField.field.value,
    stayType: stayTypeField.field.value,
    schoolYouthBooking: schoolYouthBookingField.field.value,
    reason: reasonField.field.value,
    hotel: hotelField.field.value,
    dateRange: dateRangeField.field.value as DateRange,
    packageType: packageTypeField.field.value,
    bookerTypeOptions: bookerTypeOptionsTranslated,
    stayTypeOptions: stayTypeOptionsTranslated,
    reasonOptions: reasonOptionsTranslated,
    packageTypeOptions: packageTypeOptionsTranslated,
    errors,
    onBookerTypeChange: bookerTypeField.field.onChange,
    onStayTypeChange: stayTypeField.field.onChange,
    onSchoolYouthBookingChange: schoolYouthBookingField.field.onChange,
    onReasonChange: reasonField.field.onChange,
    onHotelChange: hotelField.field.onChange,
    onDateRangeChange: dateRangeField.field.onChange,
    onPackageTypeChange: packageTypeField.field.onChange,
  };
}
