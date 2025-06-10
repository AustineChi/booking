import React from "react";
import { Control, FieldErrors, useController } from "react-hook-form";
import { useFormContext } from "@/context/FormContext";
import { BookingDetailsForm } from "./BookingDetailsForm";
import {
  bookerTypeOptions,
  stayTypeOptions,
  reasonOptions,
} from "@/lib/constants";
import { BookingDetailsTranslations } from "@/models/BookingDetailsTranslations.model";
import { translateTitleOptions } from "@/lib/functions/translateOptions";
import { BookingFormData } from "@/models/bookingData.model";

interface DateRange {
  checkIn?: Date | undefined;
  checkOut?: Date | undefined;
}

interface BookingDetailsProps {
  translations: BookingDetailsTranslations;
  control: Control<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
  handleSubmit: () => void;
}

export const BookingDetails = React.memo(
  ({ translations, control, errors, handleSubmit }: BookingDetailsProps) => {
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

    if (activeStep !== "booking") return null;

    return (
      <BookingDetailsForm
        translations={translations}
        bookerType={bookerTypeField.field.value}
        stayType={stayTypeField.field.value}
        schoolYouthBooking={schoolYouthBookingField.field.value}
        reason={reasonField.field.value}
        hotel={hotelField.field.value}
        dateRange={dateRangeField.field.value as DateRange}
        packageType={packageTypeField.field.value}
        bookerTypeOptions={bookerTypeOptionsTranslated}
        stayTypeOptions={stayTypeOptionsTranslated}
        reasonOptions={reasonOptionsTranslated}
        packageTypeOptions={packageTypeOptionsTranslated}
        errors={{
          bookerType: errors.bookerType?.message,
          stayType: errors.stayType?.message,
          schoolYouthBooking: errors.schoolYouthBooking?.message,
          reason: errors.reason?.message,
          hotel: errors.hotel?.message,
          dateRange: errors.dateRange?.message,
          packageType: errors.packageType?.message,
        }}
        onBookerTypeChange={bookerTypeField.field.onChange}
        onStayTypeChange={stayTypeField.field.onChange}
        onSchoolYouthBookingChange={schoolYouthBookingField.field.onChange}
        onReasonChange={reasonField.field.onChange}
        onHotelChange={hotelField.field.onChange}
        onDateRangeChange={dateRangeField.field.onChange}
        onPackageTypeChange={packageTypeField.field.onChange}
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

BookingDetails.displayName = "BookingDetails";
