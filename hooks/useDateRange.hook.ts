import { useState, useCallback } from "react";

export const useDateRange = (initialCheckIn?: Date, initialCheckOut?: Date) => {
  const [checkIn, setCheckIn] = useState<Date | null>(initialCheckIn || null);
  const [checkOut, setCheckOut] = useState<Date | null>(
    initialCheckOut || null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleDateRangeChange = useCallback(
    (dates: [Date | null, Date | null]) => {
      const [start, end] = dates;
      setCheckIn(start);
      setCheckOut(end);
      if (start && end) setIsOpen(false);
    },
    []
  );

  const handleReset = useCallback(() => {
    setCheckIn(null);
    setCheckOut(null);
  }, []);

  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleDone = useCallback(() => {
    setIsOpen(false);
  }, []);

  const displayValue =
    checkIn && checkOut
      ? `${checkIn.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} | ${checkOut.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`
      : undefined;

  return {
    checkIn,
    checkOut,
    isOpen,
    displayValue,
    handleDateRangeChange,
    handleReset,
    handleToggle,
    handleDone,
  };
};
