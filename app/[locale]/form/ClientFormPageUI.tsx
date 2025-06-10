import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { BookingDetails } from "@/components/form/BookingDetails/BookingDetails";
import { ContactDetails } from "@/components/form/ContactDetails/ContactDetails";
import { FormHeader } from "@/components/form/FormHeader/FormHeader";
import { RoomRequirements } from "@/components/form/RoomRequirements/RoomRequirements";
import { useBookingForm } from "@/hooks/useBookingForm.hook";
import { useContactForm } from "@/hooks/useContactForm.hook";
import { useRoomForm } from "@/hooks/useRoomForm.hook";
import { BookingDetailsTranslations } from "@/models/BookingDetailsTranslations.model";
import { ContactDetailsTranslations } from "@/models/ContactDetailsTranslations.model";
import { FormHeaderTranslations } from "@/models/FormHeaderTranslations.model";
import { RoomRequirementTranslations } from "@/models/RoomRequirementTranslations.model";

interface Step {
  key: "booking" | "contact" | "room";
  label: string;
}

interface ClientFormPageUIProps {
  activeStep: "booking" | "contact" | "room";
  steps: Step[];
  onStepChange: (stepKey: "booking" | "contact" | "room") => void;
  formHeaderTranslations: FormHeaderTranslations;
  bookingDetailsTranslations: BookingDetailsTranslations;
  contactDetailsTranslations: ContactDetailsTranslations;
  roomRequirementTranslations: RoomRequirementTranslations;
}

export const ClientFormPageUI = React.memo(
  ({
    activeStep,
    steps,
    onStepChange,
    formHeaderTranslations,
    bookingDetailsTranslations,
    contactDetailsTranslations,
    roomRequirementTranslations,
  }: ClientFormPageUIProps) => {
    const bookingForm = useBookingForm({
      translations: bookingDetailsTranslations,
    });
    const contactForm = useContactForm({
      translations: contactDetailsTranslations,
    });
    const roomForm = useRoomForm({ translations: roomRequirementTranslations });

    const handleStepChange = (stepKey: "booking" | "contact" | "room") => {
      onStepChange(stepKey);
    };

    return (
      <div className="flex justify-center">
        <div className="space-y-4 mt-12 max-w-[480px] w-full">
          <FormHeader translations={formHeaderTranslations} />
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div key={index} className="border rounded overflow-hidden">
                <button
                  className="w-full flex text-text-tertiary justify-between h-[63px] items-center text-left text-2xl font-semibold text-slate-800 px-4 transition-all duration-300 focus:outline-none"
                  onClick={() => handleStepChange(step.key)}
                  aria-expanded={activeStep === step.key}
                  aria-controls={`accordion-content-${index}`}
                >
                  <span>{step.label}</span>
                  <FaChevronDown
                    className={`text-lg transform transition-transform duration-300 ${
                      activeStep === step.key ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {activeStep === step.key && (
                  <div
                    id={`accordion-content-${index}`}
                    className="p-4 border-t"
                    role="region"
                  >
                    {step.key === "contact" && (
                      <ContactDetails
                        translations={contactDetailsTranslations}
                        control={contactForm.control}
                        errors={contactForm.errors}
                        handleSubmit={contactForm.handleSubmit}
                      />
                    )}
                    {step.key === "booking" && (
                      <BookingDetails
                        translations={bookingDetailsTranslations}
                        control={bookingForm.control as never} // Note: Type issue still present, consider fixing
                        errors={bookingForm.errors as never}
                        handleSubmit={bookingForm.handleSubmit}
                      />
                    )}
                    {step.key === "room" && (
                      <RoomRequirements
                        translations={roomRequirementTranslations}
                        control={roomForm.control}
                        errors={roomForm.errors}
                        handleSubmit={roomForm.handleSubmit}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.activeStep === nextProps.activeStep &&
      prevProps.formHeaderTranslations === nextProps.formHeaderTranslations &&
      prevProps.bookingDetailsTranslations ===
        nextProps.bookingDetailsTranslations &&
      prevProps.contactDetailsTranslations ===
        nextProps.contactDetailsTranslations &&
      prevProps.roomRequirementTranslations ===
        nextProps.roomRequirementTranslations
    );
  }
);

ClientFormPageUI.displayName = "ClientFormPageUI";
