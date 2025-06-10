"use client";

import { FiChevronLeft } from "react-icons/fi";
import { Button } from "@/components/form-fields/Button/Button";
import { useFormPage } from "@/hooks/useFormPage.hook";

const Footer: React.FC = () => {
  const { handleBack } = useFormPage({ initialFormData: {} });

  return (
    <footer className="p-4">
      <div className="container mx-auto">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="flex items-center gap-2 text-base font-semibold"
        >
          <FiChevronLeft className="w-5 h-5" />
          Cancel and return to home
        </Button>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
