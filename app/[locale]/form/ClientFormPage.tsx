"use client";

import { useFormPage } from "@/hooks/useFormPage.hook";
import { ClientFormPageUI } from "./ClientFormPageUI";
import { FormHeaderTranslations } from "@/models/FormHeaderTranslations.model";
import { BookingDetailsTranslations } from "@/models/BookingDetailsTranslations.model";
import { ContactDetailsTranslations } from "@/models/ContactDetailsTranslations.model";
import { RoomRequirementTranslations } from "@/models/RoomRequirementTranslations.model";

interface ClientFormPageProps {
  translations: {
    REQUEST_A_GROUP_BOOKING: string;
    BOOKING_DETAILS: string;
    CONTACT_DETAILS: string;
    ROOM_REQUIREMENTS: string;
    // Keys for BookingDetails
    BOOKING_DETAILS_DESCRIPTION: string;
    WHAT_TYPE_OF_BOOKER: string;
    IS_YOUR_GROUP_STAYING: string;
    SCHOOL_YOUTH_BOOKING: string;
    REASON_FOR_VISIT: string;
    SELECT_A_REASON: string;
    PACKAGE_TYPE: string;
    PREMIER_INN_BREAKFAST: string;
    MEAL_DEAL: string;
    CONTINUE: string;
    FIELD_REQUIRED: string;
    CHECK_IN_EARLIER_THAN_TODAY: string;
    CHECK_OUT_EARLIER_THAN_CHECK_IN: string;
    PACKAGE_TYPE_DESCRIPTION: string;
    ENTER_DETAILS: string;
    // Keys for ContactDetails
    YOUR_CONTACT_DETAILS: string;
    TITLE: string;
    SELECT_A_TITLE: string;
    FIRST_NAME: string;
    LAST_NAME: string;
    PHONE_NUMBER: string;
    EMAIL_ADDRESS: string;
    MAX_LENGTH_ERROR_FIRST_NAME: string;
    MAX_LENGTH_ERROR_LAST_NAME: string;
    PHONE_INVALID: string;
    EMAIL_INVALID: string;
    // Keys for RoomRequirements
    ROOMS_DESCRIPTION: string;
    ROOMS: string;
    TRAVELLING_WITH_CHILDREN: string;
    ACCESSIBLE_NEEDED: string;
    ADDITIONAL_INFORMATION: string;
    ADDITIONAL_INFO_INSTRUCTIONS: string;
    ADDITIONAL_INFO_SUB_INSTRUCTIONS: string;
    COMMENTS_PLACEHOLDER: string;
    SUBMIT_REQUEST: string;
    SINGLE_OCCUPANCY: string;
    DOUBLE_OCCUPANCY: string;
    TWIN: string;
    ROOM_TYPE_SINGLE_SUB: string;
    ROOM_TYPE_DOUBLE_SUB: string;
    TOTAL_ROOMS: string;
    PLANNING_GROUP_EVENT: string;
    [key: string]: string;
  };
}

export default function ClientFormPage({ translations }: ClientFormPageProps) {
  const { activeStep, setActiveStep } = useFormPage({ initialFormData: {} });

  const steps = [
    { key: "contact" as const, label: translations.CONTACT_DETAILS },
    { key: "booking" as const, label: translations.BOOKING_DETAILS },
    { key: "room" as const, label: translations.ROOM_REQUIREMENTS },
  ];

  const formHeaderTranslations: FormHeaderTranslations = {
    REQUEST_A_GROUP_BOOKING: translations.REQUEST_A_GROUP_BOOKING,
    PLANNING_GROUP_EVENT: translations.PLANNING_GROUP_EVENT,
  };

  const bookingDetailsTranslations: BookingDetailsTranslations = {
    BOOKING_DETAILS: translations.BOOKING_DETAILS,
    BOOKING_DETAILS_DESCRIPTION: translations.BOOKING_DETAILS_DESCRIPTION,
    WHAT_TYPE_OF_BOOKER: translations.WHAT_TYPE_OF_BOOKER,
    IS_YOUR_GROUP_STAYING: translations.IS_YOUR_GROUP_STAYING,
    SCHOOL_YOUTH_BOOKING: translations.SCHOOL_YOUTH_BOOKING,
    REASON_FOR_VISIT: translations.REASON_FOR_VISIT,
    SELECT_A_REASON: translations.SELECT_A_REASON,
    PACKAGE_TYPE: translations.PACKAGE_TYPE,
    PREMIER_INN_BREAKFAST: translations.PREMIER_INN_BREAKFAST,
    MEAL_DEAL: translations.MEAL_DEAL,
    CONTINUE: translations.CONTINUE,
    FIELD_REQUIRED: translations.FIELD_REQUIRED,
    CHECK_IN_EARLIER_THAN_TODAY: translations.CHECK_IN_EARLIER_THAN_TODAY,
    CHECK_OUT_EARLIER_THAN_CHECK_IN:
      translations.CHECK_OUT_EARLIER_THAN_CHECK_IN,
    PACKAGE_TYPE_DESCRIPTION: translations.PACKAGE_TYPE_DESCRIPTION,
    ENTER_A_HOTEL: translations.ENTER_A_HOTEL,
    BOOKER_PERSONAL: translations.BOOKER_PERSONAL,
    BOOKER_BUSINESS: translations.BOOKER_BUSINESS,
    BOOKER_TRAVEL_MANAGEMENT: translations.BOOKER_TRAVEL_MANAGEMENT,
    BOOKER_TRAVEL_AGENT: translations.BOOKER_TRAVEL_AGENT,
    STAY_BUSINESS: translations.STAY_BUSINESS,
    STAY_LEISURE: translations.STAY_LEISURE,
    REASON_ASSOCIATION: translations.REASON_ASSOCIATION,
    REASON_BUS_TOUR: translations.REASON_BUS_TOUR,
    REASON_BUSINESS_MEETING: translations.REASON_BUSINESS_MEETING,
    REASON_CHARITY_EVENT: translations.REASON_CHARITY_EVENT,
    REASON_CONVENTION_CONFERENCE: translations.REASON_CONVENTION_CONFERENCE,
    REASON_GOVERNMENT: translations.REASON_GOVERNMENT,
    REASON_GRADUATION_REUNION: translations.REASON_GRADUATION_REUNION,
    REASON_LAYOVER: translations.REASON_LAYOVER,
    REASON_LEISURE_TOUR: translations.REASON_LEISURE_TOUR,
    REASON_MILITARY: translations.REASON_MILITARY,
    ENTER_DETAILS: translations.ENTER_DETAILS,
    CHECK_IN_CHECK_OUT: translations.CHECK_IN_CHECK_OUT,
  };

  const contactDetailsTranslations: ContactDetailsTranslations = {
    CONTACT_DETAILS: translations.CONTACT_DETAILS,
    YOUR_CONTACT_DETAILS: translations.YOUR_CONTACT_DETAILS,
    TITLE: translations.TITLE,
    SELECT_A_TITLE: translations.SELECT_A_TITLE,
    FIRST_NAME: translations.FIRST_NAME,
    LAST_NAME: translations.LAST_NAME,
    PHONE_NUMBER: translations.PHONE_NUMBER,
    EMAIL_ADDRESS: translations.EMAIL_ADDRESS,
    CONTINUE: translations.CONTINUE,
    FIELD_REQUIRED: translations.FIELD_REQUIRED,
    MAX_LENGTH_ERROR_FIRST_NAME: translations.MAX_LENGTH_ERROR_FIRST_NAME,
    MAX_LENGTH_ERROR_LAST_NAME: translations.MAX_LENGTH_ERROR_LAST_NAME,
    PHONE_INVALID: translations.PHONE_INVALID,
    EMAIL_INVALID: translations.EMAIL_INVALID,
    TITLE_MR: translations.TITLE_MR,
    TITLE_MRS: translations.TITLE_MRS,
    TITLE_MS: translations.TITLE_MS,
    TITLE_DR: translations.TITLE_DR,
    TITLE_MX: translations.TITLE_MX,
    TITLE_MISS: translations.TITLE_MISS,
    TITLE_MASTER: translations.TITLE_MASTER,
    TITLE_LORD: translations.TITLE_LORD,
    TITLE_LADY: translations.TITLE_LADY,
    TITLE_SIR: translations.TITLE_SIR,
    TITLE_COL: translations.TITLE_COL,
    TITLE_PROF: translations.TITLE_PROF,
    TITLE_REV: translations.TITLE_REV,
  };

  const roomRequirementTranslations: RoomRequirementTranslations = {
    ROOM_REQUIREMENTS: translations.ROOM_REQUIREMENTS,
    ROOMS_DESCRIPTION: translations.ROOMS_DESCRIPTION,
    ROOMS: translations.ROOMS,
    TRAVELLING_WITH_CHILDREN: translations.TRAVELLING_WITH_CHILDREN,
    ACCESSIBLE_NEEDED: translations.ACCESSIBLE_NEEDED,
    ADDITIONAL_INFORMATION: translations.ADDITIONAL_INFORMATION,
    ADDITIONAL_INFO_INSTRUCTIONS: translations.ADDITIONAL_INFO_INSTRUCTIONS,
    ADDITIONAL_INFO_SUB_INSTRUCTIONS:
      translations.ADDITIONAL_INFO_SUB_INSTRUCTIONS,
    COMMENTS_PLACEHOLDER: translations.COMMENTS_PLACEHOLDER,
    SUBMIT_REQUEST: translations.SUBMIT_REQUEST,
    FIELD_REQUIRED: translations.FIELD_REQUIRED,
    SINGLE_OCCUPANCY: translations.SINGLE_OCCUPANCY,
    DOUBLE_OCCUPANCY: translations.DOUBLE_OCCUPANCY,
    TWIN: translations.TWIN,
    ROOM_TYPE_SINGLE_SUB: translations.ROOM_TYPE_SINGLE_SUB,
    ROOM_TYPE_DOUBLE_SUB: translations.ROOM_TYPE_DOUBLE_SUB,
    TOTAL_ROOMS: translations.TOTAL_ROOMS,
  };

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
