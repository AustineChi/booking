import { FormProvider } from "@/context/FormContext";
import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { useBookingForm } from "./useBookingForm.hook";

describe("useBookingForm Hook", () => {
  const translations = {
    FIELD_REQUIRED: "This field is required.",
    CHECK_IN_EARLIER_THAN_TODAY: "Check-in cannot be earlier than today.",
    CHECK_OUT_EARLIER_THAN_CHECK_IN: "Check-out must be after check-in.",
  };

  const initialFormData: any = {
    booking: {
      bookerType: "personal",
      stayType: "leisure",
      schoolYouthBooking: false,
      reason: "vacation",
      hotel: "Hotel A",
      dateRange: {
        checkIn: new Date("2025-06-10"),
        checkOut: new Date("2025-06-12"),
      },
      packageType: "breakfast",
    },
  };

  const wrapper = ({ children }: { children: ReactNode }) => (
    <FormProvider initialFormData={initialFormData}>{children}</FormProvider>
  );

  it("initializes with default values from FormContext", () => {
    const { result } = renderHook(() => useBookingForm({ translations }), {
      wrapper,
    });

    expect(result.current.control._defaultValues).toEqual({
      bookerType: "personal",
      stayType: "leisure",
      schoolYouthBooking: false,
      reason: "vacation",
      hotel: "Hotel A",
      dateRange: {
        checkIn: new Date("2025-06-10"),
        checkOut: new Date("2025-06-12"),
      },
      packageType: "breakfast",
    });
    expect(result.current.errors).toEqual({});
  });

  it("initializes with fallback defaults when FormContext is empty", () => {
    const emptyWrapper = ({ children }: { children: ReactNode }) => (
      <FormProvider initialFormData={{}}>{children}</FormProvider>
    );
    const { result } = renderHook(() => useBookingForm({ translations }), {
      wrapper: emptyWrapper,
    });

    expect(result.current.control._defaultValues).toEqual({
      bookerType: "",
      stayType: "",
      schoolYouthBooking: false,
      reason: "",
      hotel: "",
      dateRange: { checkIn: undefined, checkOut: undefined },
      packageType: "",
    });
    expect(result.current.errors).toEqual({});
  });
});
