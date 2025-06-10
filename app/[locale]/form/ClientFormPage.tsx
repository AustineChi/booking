"use client";

import { useFormPage } from "@/hooks/useFormPage.hook";
import { ClientFormPageUI } from "./ClientFormPageUI";
import { FormHeaderTranslations } from "@/models/FormHeaderTranslations.model";
import { BookingDetailsTranslations } from "@/models/BookingDetailsTranslations.model";
import { ContactDetailsTranslations } from "@/models/ContactDetailsTranslations.model";
import { RoomRequirementTranslations } from "@/models/RoomRequirementTranslations.model";

interface ClientFormPageProps {
  formHeaderTranslations: FormHeaderTranslations;
  bookingDetailsTranslations: BookingDetailsTranslations;
  contactDetailsTranslations: ContactDetailsTranslations;
  roomRequirementTranslations: RoomRequirementTranslations;
}
export default function ClientFormPage({
  formHeaderTranslations,
  bookingDetailsTranslations,
  contactDetailsTranslations,
  roomRequirementTranslations,
}: ClientFormPageProps) {
  const { activeStep, setActiveStep } = useFormPage({ initialFormData: {} });

  const steps = [
    {
      key: "contact" as const,
      label: contactDetailsTranslations.CONTACT_DETAILS,
    },
    {
      key: "booking" as const,
      label: bookingDetailsTranslations.BOOKING_DETAILS,
    },
    {
      key: "room" as const,
      label: roomRequirementTranslations.ROOM_REQUIREMENTS,
    },
  ];

  return (
    <ClientFormPageUI
      activeStep={activeStep}
      steps={steps}
      onStepChange={setActiveStep}
      formHeaderTranslations={formHeaderTranslations}
      bookingDetailsTranslations={bookingDetailsTranslations}
      contactDetailsTranslations={contactDetailsTranslations}
      roomRequirementTranslations={roomRequirementTranslations}
    />
  );
}
