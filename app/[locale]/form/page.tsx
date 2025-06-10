import { getTranslations } from "next-intl/server";
import { FormProvider } from "@/context/FormContext";
import { FormData } from "@/models/Form.model";
import { PageLayout } from "@/components/layout/PageLayout";
import ClientFormPage from "@/app/[locale]/form/ClientFormPage";

interface FormPageProps {
  params: Promise<{ locale: string }>;
}

async function getInitialFormData(): Promise<Partial<FormData>> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/form`, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch initial form data");
    }
    const data: Partial<FormData> = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching initial form data:", error);
    return {};
  }
}

export default async function FormPage({ params }: FormPageProps) {
  const { locale } = await params;
  const initialFormData = await getInitialFormData();
  const t = await getTranslations({ locale });

  const clientFormPageTranslations = {
    REQUEST_A_GROUP_BOOKING: t("REQUEST_A_GROUP_BOOKING"),
    BOOKING_DETAILS: t("BOOKING_DETAILS"),
    CONTACT_DETAILS: t("CONTACT_DETAILS"),
    ROOM_REQUIREMENTS: t("ROOM_REQUIREMENTS"),
    BOOKING_DETAILS_DESCRIPTION: t("BOOKING_DETAILS_DESCRIPTION"),
    WHAT_TYPE_OF_BOOKER: t("WHAT_TYPE_OF_BOOKER"),
    IS_YOUR_GROUP_STAYING: t("IS_YOUR_GROUP_STAYING"),
    SCHOOL_YOUTH_BOOKING: t("SCHOOL_YOUTH_BOOKING"),
    REASON_FOR_VISIT: t("REASON_FOR_VISIT"),
    SELECT_A_REASON: t("SELECT_A_REASON"),
    PACKAGE_TYPE: t("PACKAGE_TYPE"),
    PREMIER_INN_BREAKFAST: t("PREMIER_INN_BREAKFAST"),
    MEAL_DEAL: t("MEAL_DEAL"),
    PACKAGE_TYPE_DESCRIPTION: t("PACKAGE_TYPE_DESCRIPTION"),
    CONTINUE: t("CONTINUE"),
    FIELD_REQUIRED: t("FIELD_REQUIRED"),
    CHECK_IN_EARLIER_THAN_TODAY: t("CHECK_IN_EARLIER_THAN_TODAY"),
    CHECK_OUT_EARLIER_THAN_CHECK_IN: t("CHECK_OUT_EARLIER_THAN_CHECK_IN"),
    ENTER_DETAILS: t("ENTER_DETAILS"),
    YOUR_CONTACT_DETAILS: t("YOUR_CONTACT_DETAILS"),
    TITLE: t("TITLE"),
    SELECT_A_TITLE: t("SELECT_A_TITLE"),
    FIRST_NAME: t("FIRST_NAME"),
    LAST_NAME: t("LAST_NAME"),
    PHONE_NUMBER: t("PHONE_NUMBER"),
    EMAIL_ADDRESS: t("EMAIL_ADDRESS"),
    MAX_LENGTH_ERROR_FIRST_NAME: t("MAX_LENGTH_ERROR", { max: 20 }),
    MAX_LENGTH_ERROR_LAST_NAME: t("MAX_LENGTH_ERROR", { max: 30 }),
    PHONE_INVALID: t("PHONE_INVALID"),
    EMAIL_INVALID: t("EMAIL_INVALID"),
    ROOMS_DESCRIPTION: t("ROOMS_DESCRIPTION"),
    ROOMS: t("ROOMS"),
    TRAVELLING_WITH_CHILDREN: t("TRAVELLING_WITH_CHILDREN"),
    ACCESSIBLE_NEEDED: t("ACCESSIBLE_NEEDED"),
    ADDITIONAL_INFORMATION: t("ADDITIONAL_INFORMATION"),
    ADDITIONAL_INFO_INSTRUCTIONS: t("ADDITIONAL_INFO_INSTRUCTIONS"),
    ADDITIONAL_INFO_SUB_INSTRUCTIONS: t("ADDITIONAL_INFO_SUB_INSTRUCTIONS"),
    COMMENTS_PLACEHOLDER: t("COMMENTS_PLACEHOLDER"),
    SUBMIT_REQUEST: t("SUBMIT_REQUEST"),
    SINGLE_OCCUPANCY: t("SINGLE_OCCUPANCY"),
    DOUBLE_OCCUPANCY: t("DOUBLE_OCCUPANCY"),
    TWIN: t("TWIN"),
    ROOM_TYPE_SINGLE_SUB: t("1_ADULT"),
    ROOM_TYPE_DOUBLE_SUB: t("2_ADULTS"),
    TOTAL_ROOMS: t("TOTAL_ROOMS", { roomCount: 0 }),
    BOOKER_PERSONAL: t("BOOKER_PERSONAL"),
    BOOKER_BUSINESS: t("BOOKER_BUSINESS"),
    BOOKER_TRAVEL_MANAGEMENT: t("BOOKER_TRAVEL_MANAGEMENT"),
    BOOKER_TRAVEL_AGENT: t("BOOKER_TRAVEL_AGENT"),
    STAY_BUSINESS: t("STAY_BUSINESS"),
    STAY_LEISURE: t("STAY_LEISURE"),
    REASON_ASSOCIATION: t("REASON_ASSOCIATION"),
    REASON_BUS_TOUR: t("REASON_BUS_TOUR"),
    REASON_BUSINESS_MEETING: t("REASON_BUSINESS_MEETING"),
    REASON_CHARITY_EVENT: t("REASON_CHARITY_EVENT"),
    REASON_CONVENTION_CONFERENCE: t("REASON_CONVENTION_CONFERENCE"),
    REASON_GOVERNMENT: t("REASON_GOVERNMENT"),
    REASON_GRADUATION_REUNION: t("REASON_GRADUATION_REUNION"),
    REASON_LAYOVER: t("REASON_LAYOVER"),
    REASON_LEISURE_TOUR: t("REASON_LEISURE_TOUR"),
    REASON_MILITARY: t("REASON_MILITARY"),
    TITLE_MR: t("TITLE_MR"),
    TITLE_MRS: t("TITLE_MRS"),
    TITLE_MS: t("TITLE_MS"),
    TITLE_DR: t("TITLE_DR"),
    TITLE_MX: t("TITLE_MX"),
    TITLE_MISS: t("TITLE_MISS"),
    TITLE_MASTER: t("TITLE_MASTER"),
    TITLE_LORD: t("TITLE_LORD"),
    TITLE_LADY: t("TITLE_LADY"),
    TITLE_SIR: t("TITLE_SIR"),
    TITLE_COL: t("TITLE_COL"),
    TITLE_PROF: t("TITLE_PROF"),
    TITLE_REV: t("TITLE_REV"),
    ENTER_A_HOTEL: t("ENTER_A_HOTEL"),
    CHECK_IN_CHECK_OUT: t("CHECK_IN_CHECK_OUT"),
    PLANNING_GROUP_EVENT: t.rich('PLANNING_GROUP_EVENT', {
      strong: (chunks) => <strong>{chunks}</strong>,
    }) as string,
  };

  const pageLayoutTranslations = {
    BOOKING_DETAILS: t("BOOKING_DETAILS"),
    CONTACT_DETAILS: t("CONTACT_DETAILS"),
    ROOM_REQUIREMENTS: t("ROOM_REQUIREMENTS"),
  };

  return (
    <FormProvider initialFormData={initialFormData}>
      <PageLayout translations={pageLayoutTranslations}>
        <ClientFormPage translations={clientFormPageTranslations} />
      </PageLayout>
    </FormProvider>
  );
}
