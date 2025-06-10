import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormContext } from "@/context/FormContext";
import { getBookingDetailsSchema } from "@/lib/schema/bookingDetails.schema";

interface BookingFormData {
  bookerType: string;
  stayType: string;
  schoolYouthBooking: boolean;
  reason: string;
  hotel: string;
  dateRange: {
    checkIn?: Date;
    checkOut?: Date;
  };
  packageType: string;
}

interface UseBookingFormProps {
  translations: {
    FIELD_REQUIRED: string;
    CHECK_IN_EARLIER_THAN_TODAY: string;
    CHECK_OUT_EARLIER_THAN_CHECK_IN: string;
  };
}

export function useBookingForm({ translations }: UseBookingFormProps) {
  const { formData, setFormData, setActiveStep } = useFormContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: yupResolver(getBookingDetailsSchema(translations)),
    defaultValues: formData.booking ?? {
      bookerType: "",
      stayType: "",
      schoolYouthBooking: false,
      reason: "",
      hotel: "",
      dateRange: { checkIn: undefined, checkOut: undefined },
      packageType: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
    setFormData({ ...formData, booking: data });
    setActiveStep("room");
  };

  return { control, handleSubmit: handleSubmit(onSubmit), errors };
}
