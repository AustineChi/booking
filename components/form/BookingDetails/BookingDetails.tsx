import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
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
      <Controller
        name="bookerType"
        control={control}
        render={({ field }) => (
          <Controller
            name="stayType"
            control={control}
            render={({ field: stayTypeField }) => (
              <Controller
                name="schoolYouthBooking"
                control={control}
                render={({ field: schoolYouthBookingField }) => (
                  <Controller
                    name="reason"
                    control={control}
                    render={({ field: reasonField }) => (
                      <Controller
                        name="hotel"
                        control={control}
                        render={({ field: hotelField }) => (
                          <Controller
                            name="dateRange"
                            control={control}
                            render={({ field: dateRangeField }) => (
                              <Controller
                                name="packageType"
                                control={control}
                                render={({ field: packageTypeField }) => (
                                  <BookingDetailsForm
                                    translations={translations}
                                    bookerType={field.value}
                                    stayType={stayTypeField.value}
                                    schoolYouthBooking={
                                      schoolYouthBookingField.value
                                    }
                                    reason={reasonField.value}
                                    hotel={hotelField.value}
                                    dateRange={dateRangeField.value as never}
                                    packageType={packageTypeField.value}
                                    bookerTypeOptions={
                                      bookerTypeOptionsTranslated
                                    }
                                    stayTypeOptions={stayTypeOptionsTranslated}
                                    reasonOptions={reasonOptionsTranslated}
                                    packageTypeOptions={
                                      packageTypeOptionsTranslated
                                    }
                                    errors={{
                                      bookerType: errors.bookerType?.message,
                                      stayType: errors.stayType?.message,
                                      schoolYouthBooking:
                                        errors.schoolYouthBooking?.message,
                                      reason: errors.reason?.message,
                                      hotel: errors.hotel?.message,
                                      dateRange: errors.dateRange?.message,
                                      packageType: errors.packageType?.message,
                                    }}
                                    onBookerTypeChange={(value: string) =>
                                      field.onChange(value)
                                    }
                                    onStayTypeChange={(value: string) =>
                                      stayTypeField.onChange(value)
                                    }
                                    onSchoolYouthBookingChange={(
                                      checked: boolean
                                    ) =>
                                      schoolYouthBookingField.onChange(checked)
                                    }
                                    onReasonChange={(
                                      value: string | undefined
                                    ) => reasonField.onChange(value)}
                                    onHotelChange={(value: string) =>
                                      hotelField.onChange(value)
                                    }
                                    onDateRangeChange={(value: DateRange) =>
                                      dateRangeField.onChange(value)
                                    }
                                    onPackageTypeChange={(value: string) =>
                                      packageTypeField.onChange(value)
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

BookingDetails.displayName = "BookingDetails";
