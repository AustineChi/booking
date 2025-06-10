"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import { FormStep, FormData } from "@/models/Form.model";

interface FormContextType {
  activeStep: FormStep;
  setActiveStep: (step: "booking" | "contact" | "room") => void;
  formData: Partial<FormData>;
  setFormData: (data: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({
  initialFormData,
  children,
}: {
  initialFormData: Partial<FormData>;
  children: React.ReactNode;
}) {
  const [activeStep, setActiveStep] = useState<"booking" | "contact" | "room">(
    "contact"
  );
  const [formData, setFormData] = useState<Partial<FormData>>(
    initialFormData ?? {
      contact: { title: "", firstName: "", lastName: "", phone: "", email: "" },
      booking: {
        bookerType: "",
        stayType: "",
        schoolYouthBooking: false,
        reason: "",
        hotel: "",
        dateRange: { checkIn: undefined, checkOut: undefined },
        packageType: "",
      },
      room: {
        travellingWithChildren: false,
        accessibleNeeded: false,
        singleRooms: 0,
        doubleRooms: 0,
        twinRooms: 0,
        comments: "",
      },
    }
  );

  console.log(formData, "FormProvider formData");

  const contextValue = useMemo(
    () => ({ activeStep, setActiveStep, formData, setFormData }),
    [activeStep, formData]
  );

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
