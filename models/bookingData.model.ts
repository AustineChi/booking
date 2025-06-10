export interface BookingFormData {
  bookerType: string;
  stayType: string;
  schoolYouthBooking: boolean;
  reason: string;
  hotel: string;
  dateRange: string | { startDate: string; endDate: string };
  packageType: string;
}
