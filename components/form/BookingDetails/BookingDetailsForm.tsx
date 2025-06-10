import { Checkbox } from "@/components/form-fields/Checkbox/Checkbox";
import { Select } from "@/components/form-fields/Select/Select";
import { HotelSearchInput } from "@/components/form-fields/HotelSearchInput/HotelSearchInput";
import { Button } from "@/components/form-fields/Button/Button";
import { BookingDetailsTranslations } from "@/models/BookingDetailsTranslations.model";
import { RadioGroup } from "@/components/form-fields/RadioGroup/RadioGroup";
import { DateRangeInput } from "@/components/form-fields/DateRangeInput/DateRangeInput";

interface DateRange {
  checkIn?: Date | undefined;
  checkOut?: Date | undefined;
}

interface BookingDetailsFormProps {
  translations: BookingDetailsTranslations;
  bookerType: string;
  stayType: string;
  schoolYouthBooking: boolean;
  reason: string;
  hotel: string;
  dateRange: DateRange | undefined;
  packageType: string;
  bookerTypeOptions: { value: string; label: string }[];
  stayTypeOptions: { value: string; label: string }[];
  reasonOptions: { value: string; label: string }[];
  packageTypeOptions: { value: string; label: string }[];
  errors: Record<string, string | undefined>;
  onBookerTypeChange: (value: string) => void;
  onStayTypeChange: (value: string) => void;
  onSchoolYouthBookingChange: (checked: boolean) => void;
  onReasonChange: (value: string | undefined) => void;
  onHotelChange: (value: string) => void;
  onDateRangeChange: (value: DateRange) => void;
  onPackageTypeChange: (value: string) => void;
  onSubmit: () => void;
}

export const BookingDetailsForm: React.FC<BookingDetailsFormProps> = ({
  translations,
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
  errors,
  onBookerTypeChange,
  onStayTypeChange,
  onSchoolYouthBookingChange,
  onReasonChange,
  onHotelChange,
  onDateRangeChange,
  onPackageTypeChange,
  onSubmit,
}) => {
  return (
    <div className="px-4">
      <form onSubmit={onSubmit} className="space-y-4">
        <RadioGroup
          title={translations.WHAT_TYPE_BOOKER}
          id="bookerType"
          name="bookerType"
          required
          options={bookerTypeOptions}
          value={bookerType}
          onChange={onBookerTypeChange}
          error={errors.bookerType}
        />
        <RadioGroup
          title={translations.IS_YOUR_GROUP_STAYING}
          id="stayType"
          name="stayType"
          required
          options={stayTypeOptions}
          value={stayType}
          onChange={onStayTypeChange}
          error={errors.stayType}
        />
        <Checkbox
          label={translations.SCHOOL_YOUTH_BOOKING}
          id="schoolYouthBooking"
          checked={schoolYouthBooking}
          onChange={onSchoolYouthBookingChange}
          error={errors.schoolYouthBooking}
        />
        <Select
          label={translations.REASON_FOR_VISIT}
          id="reason"
          required
          options={reasonOptions}
          value={reason}
          onChange={onReasonChange}
          error={!!errors.reason}
          placeholder={translations.SELECT_A_REASON}
        />
        <HotelSearchInput
          id="hotel-search"
          value={hotel}
          onChange={onHotelChange}
          placeholder={translations.ENTER_A_HOTEL}
          instruction={translations.BOOKING_DETAILS_DESCRIPTION}
          title={translations.BOOKING_DETAILS}
          error={errors.hotel}
          required
        />
        <DateRangeInput
          id="date-range"
          value={dateRange}
          onChange={onDateRangeChange}
          placeholder={translations.CHECK_IN_CHECK_OUT}
          resetLabel={translations.RESET}
          doneLabel={translations.DONE}
          error={errors.dateRange}
        />
        <RadioGroup
          title={translations.PACKAGE_TYPE}
          label={translations.PACKAGE_TYPE_DESCRIPTION}
          id="packageType"
          name="packageType"
          required
          options={packageTypeOptions}
          value={packageType}
          onChange={onPackageTypeChange}
          error={errors.packageType}
        />
        <Button type="submit" variant="primary" className="w-full">
          {translations.CONTINUE}
        </Button>
      </form>
    </div>
  );
};

BookingDetailsForm.displayName = "BookingDetailsForm";
