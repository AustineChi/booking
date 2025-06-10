import { renderHook, act } from "@testing-library/react";
import { mockHotelSuggestions } from "@/lib/constants";
import { useHotelSearch } from "./useHotelSearch.hook";

describe("useHotelSearch hook", () => {
  test("should initialize with empty string and no suggestions", () => {
    const { result } = renderHook(() => useHotelSearch());
    expect(result.current.value).toBe("");
    expect(result.current.suggestions).toEqual([]);
  });

  test("should update value and generate suggestions when input is > 2 chars", () => {
    const { result } = renderHook(() => useHotelSearch());

    act(() => {
      result.current.handleChange({
        target: { value: "hil" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe("hil");

    const expected = mockHotelSuggestions
      .filter((s) => s.toLowerCase().includes("hil"))
      .slice(0, 5);

    expect(result.current.suggestions).toEqual(expected);
  });

  test("should clear suggestions and value on handleClear", () => {
    const { result } = renderHook(() => useHotelSearch("initial"));

    act(() => {
      result.current.handleClear();
    });

    expect(result.current.value).toBe("");
    expect(result.current.suggestions).toEqual([]);
  });

  test("should select suggestion and clear suggestions", () => {
    const { result } = renderHook(() => useHotelSearch());

    act(() => {
      result.current.handleSuggestionSelect("Hilton New York");
    });

    expect(result.current.value).toBe("Hilton New York");
    expect(result.current.suggestions).toEqual([]);
  });

  test("should not update suggestions if input is 2 characters or less", () => {
    const { result } = renderHook(() => useHotelSearch());

    act(() => {
      result.current.handleChange({
        target: { value: "hi" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe("hi");
    expect(result.current.suggestions).toEqual([]);
  });
});
