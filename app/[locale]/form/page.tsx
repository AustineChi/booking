import { FormProvider } from "@/context/FormContext";
import { PageLayout } from "@/components/layout/PageLayout";
import ClientFormPage from "@/app/[locale]/form/ClientFormPage";
import { getInitialFormData } from "@/lib/data/formData";
import { getFormTranslations } from "@/translations/formTranslations";

interface FormPageProps {
  params: Promise<{ locale: string }>;
}

export default async function FormPage({ params }: FormPageProps) {
  const { locale } = await params;
  const initialFormData = await getInitialFormData();
  const {
    roomRequirementsTranslations,
    bookingDetailsTranslations,
    contactDetailsTranslations,
    formHeaderTranslations,
  } = await getFormTranslations(locale);

  return (
    <FormProvider initialFormData={initialFormData}>
      <PageLayout>
        <ClientFormPage
          roomRequirementTranslations={roomRequirementsTranslations}
          bookingDetailsTranslations={bookingDetailsTranslations}
          contactDetailsTranslations={contactDetailsTranslations}
          formHeaderTranslations={formHeaderTranslations}
        />
      </PageLayout>
    </FormProvider>
  );
}
