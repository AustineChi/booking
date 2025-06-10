import { renderHook, act } from "@testing-library/react";
import { countries } from "@/lib/constants";
import { usePhoneInput } from "./usePhoneInput.hook";

describe("usePhoneInput", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => usePhoneInput({}));

    expect(result.current.phoneValue).toBe("");
    expect(result.current.selectedCountry).toEqual(countries[0]);
  });

  it("should initialize with custom initial value and country", () => {
    const initialCountry = countries[1];
    const { result } = renderHook(() =>
      usePhoneInput({
        initialValue: "123456",
        initialCountry,
      })
    );

    expect(result.current.phoneValue).toBe("123456");
    expect(result.current.selectedCountry).toEqual(initialCountry);
  });

  it("should update phone value on input change", () => {
    const { result } = renderHook(() => usePhoneInput({}));

    act(() => {
      result.current.handlePhoneChange({
        target: { value: "9876543210" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.phoneValue).toBe("9876543210");
  });

  it("should call external onChange handler", () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      usePhoneInput({ onChange: onChangeMock })
    );

    const event = {
      target: { value: "555" },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handlePhoneChange(event);
    });

    expect(result.current.phoneValue).toBe("555");
    expect(onChangeMock).toHaveBeenCalledWith(event);
  });
});
