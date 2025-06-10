import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox Component", () => {
  const id = "test-checkbox";
  const onChangeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders with label in English", () => {
    render(
      <Checkbox id={id} label="Please tick this box" onChange={onChangeMock} />
    );
    expect(screen.getByLabelText("Please tick this box")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("handles change event in English", () => {
    render(
      <Checkbox id={id} label="Please tick this box" onChange={onChangeMock} />
    );
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });

  test("displays error message in English", () => {
    render(
      <Checkbox
        id={id}
        label="Please tick this box"
        error="This field is required."
      />
    );
    expect(screen.getByText("This field is required.")).toBeInTheDocument();
  });
});
