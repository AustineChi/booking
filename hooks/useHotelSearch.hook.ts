import { useState, useCallback } from "react";
import { mockHotelSuggestions } from "@/lib/constants";

export const useHotelSearch = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length > 2) {
      const filteredSuggestions = mockHotelSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(newValue.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, []);

  const handleClear = useCallback(() => {
    setValue("");
    setSuggestions([]);
  }, []);

  const handleSuggestionSelect = useCallback((suggestion: string) => {
    setValue(suggestion);
    setSuggestions([]);
  }, []);

  return {
    value,
    suggestions,
    handleChange,
    handleClear,
    handleSuggestionSelect,
  };
};
