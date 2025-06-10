"use client";

import { useEffect } from "react";
import { useFormContext } from "@/context/FormContext";
import { useRouter } from "next/navigation";
import { FormData } from "@/models/Form.model";

interface UseFormPageProps {
  initialFormData: Partial<FormData>;
}

export function useFormPage({ initialFormData }: UseFormPageProps) {
  const { activeStep, setActiveStep, setFormData } = useFormContext();
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(initialFormData).length > 0) {
      setFormData(initialFormData);
    }
  }, [initialFormData, setFormData]);

  const handleBack = () => {
    if (activeStep === "booking") {
      router.push("/");
    } else if (activeStep === "contact") {
      setActiveStep("booking");
    } else if (activeStep === "room") {
      setActiveStep("contact");
    }
  };

  return { activeStep, setActiveStep, handleBack };
}
