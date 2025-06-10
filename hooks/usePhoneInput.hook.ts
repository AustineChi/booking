import { useState, useCallback } from "react";
import { Country, countries } from "@/lib/constants";

export const usePhoneInput = ({
  initialValue = "",
  initialCountry,
  onChange,
  onCountryChange,
}: {
  initialValue?: string;
  initialCountry?: Country;
  onChange?: React.ChangeEventHandler<HTMLInputElement>; 
  onCountryChange?: (country: Country) => void;
}) => {
  const [phoneValue, setPhoneValue] = useState(initialValue);
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    initialCountry || countries[0]
  );

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setPhoneValue(newValue);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );

  const handleCountryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const countryCode = e.target.value;
      const country =
        countries.find((c) => c.code === countryCode) || countries[0];
      setSelectedCountry(country);
      if (onCountryChange) {
        onCountryChange(country);
      }
    },
    [onCountryChange]
  );

  return {
    phoneValue,
    selectedCountry,
    handlePhoneChange,
    handleCountryChange,
  };
};
