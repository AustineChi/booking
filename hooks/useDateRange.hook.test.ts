import { renderHook, act } from "@testing-library/react";
import { useDateRange } from "./useDateRange.hook";

describe("useDateRange", () => {
  const mockCheckIn = new Date(2025, 5, 1);
  const mockCheckOut = new Date(2025, 5, 5); 

  it("initializes with null dates if none provided", () => {
    const { result } = renderHook(() => useDateRange());

    expect(result.current.checkIn).toBeNull();
    expect(result.current.checkOut).toBeNull();
    expect(result.current.isOpen).toBe(false);
    expect(result.current.displayValue).toBeUndefined();
  });

  it("initializes with provided check-in and check-out dates", () => {
    const { result } = renderHook(() =>
      useDateRange(mockCheckIn, mockCheckOut)
    );

    expect(result.current.checkIn).toEqual(mockCheckIn);
    expect(result.current.checkOut).toEqual(mockCheckOut);
    expect(result.current.displayValue).toBe("1 Jun 2025 | 5 Jun 2025");
  });

  it("sets date range and updates displayValue", () => {
    const { result } = renderHook(() => useDateRange());

    act(() => {
      result.current.handleDateRangeChange([mockCheckIn, mockCheckOut]);
    });

    expect(result.current.checkIn).toEqual(mockCheckIn);
    expect(result.current.checkOut).toEqual(mockCheckOut);
    expect(result.current.displayValue).toBe("1 Jun 2025 | 5 Jun 2025");
    expect(result.current.isOpen).toBe(false);
  });

  it("toggles the isOpen state", () => {
    const { result } = renderHook(() => useDateRange());

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.handleToggle();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.handleToggle();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it("resets checkIn and checkOut dates", () => {
    const { result } = renderHook(() =>
      useDateRange(mockCheckIn, mockCheckOut)
    );

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.checkIn).toBeNull();
    expect(result.current.checkOut).toBeNull();
    expect(result.current.displayValue).toBeUndefined();
  });

  it("closes the calendar with handleDone", () => {
    const { result } = renderHook(() => useDateRange());

    act(() => {
      result.current.handleToggle();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.handleDone();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
