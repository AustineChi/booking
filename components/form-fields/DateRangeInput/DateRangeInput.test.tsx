import React from "react";
import { DateRangeInput } from "./DateRangeInput";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("DateRangeInput Component", () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders with placeholder and icon in English", () => {
    render(
      <DateRangeInput
        id="test-date"
        onChange={onChangeMock}
        placeholder="Check In | Check Out"
        resetLabel="Reset"
        doneLabel="Done"
      />
    );

    const input = screen.getByPlaceholderText("Check In | Check Out");
    expect(input).toBeInTheDocument();

    const icon = input.parentElement?.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  test("toggles calendar on click", async () => {
    render(
      <DateRangeInput
        id="test-date"
        onChange={onChangeMock}
        placeholder="Check In | Check Out"
        resetLabel="Reset"
        doneLabel="Done"
      />
    );

    const input = screen.getByLabelText("Date range input");
    fireEvent.click(input);

    await waitFor(() => {
      expect(screen.getByText(/2025/)).toBeInTheDocument();
    });

    expect(screen.getByText("8")).toBeInTheDocument();
  });
});
