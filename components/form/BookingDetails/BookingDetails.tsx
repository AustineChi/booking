import React from "react";
import { Control } from "react-hook-form";
import { BookingDetailsForm } from "./BookingDetailsForm";
import { BookingDetailsTranslations } from "@/models/BookingDetailsTranslations.model";
import { BookingFormData } from "@/models/bookingData.model";
import { useBookingDetails } from "@/hooks/useBookingDetails.hook";

interface BookingDetailsProps {
  translations: BookingDetailsTranslations;
  control: Control<BookingFormData>;
  errors: Record<string, string | undefined>;
  handleSubmit: () => void;
}

export const BookingDetails = React.memo(
  ({ translations, control, errors, handleSubmit }: BookingDetailsProps) => {
    const {
      shouldRender,
      bookerType,
      stayType,
      schoolYouthBooking,
      reason,
      hotel,
      dateRange,
      packageType,
      bookerTypeOptions,
      stayTypeOptions,
      reasonOptions,
      packageTypeOptions,
      onBookerTypeChange,
      onStayTypeChange,
      onSchoolYouthBookingChange,
      onReasonChange,
      onHotelChange,
      onDateRangeChange,
      onPackageTypeChange,
    } = useBookingDetails(translations, control);

    if (!shouldRender) return null;

    return (
      <BookingDetailsForm
        translations={translations}
        bookerType={bookerType}
        stayType={stayType}
        schoolYouthBooking={schoolYouthBooking}
        reason={reason}
        hotel={hotel}
        dateRange={dateRange}
        packageType={packageType}
        bookerTypeOptions={bookerTypeOptions}
        stayTypeOptions={stayTypeOptions}
        reasonOptions={reasonOptions}
        packageTypeOptions={packageTypeOptions}
        errors={errors}
        onBookerTypeChange={onBookerTypeChange}
        onStayTypeChange={onStayTypeChange}
        onSchoolYouthBookingChange={onSchoolYouthBookingChange}
        onReasonChange={onReasonChange}
        onHotelChange={onHotelChange}
        onDateRangeChange={onDateRangeChange}
        onPackageTypeChange={onPackageTypeChange}
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
