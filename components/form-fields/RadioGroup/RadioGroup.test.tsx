import { bookerTypeOptions } from "@/lib/constants";
import { RadioGroup } from "./RadioGroup";
import { render, screen, fireEvent } from "@testing-library/react";

describe("RadioGroup Component", () => {
  const id = "test-radio";
  const onChangeMock = jest.fn();

  const translateOptions = (
    options: typeof bookerTypeOptions,
    t: (key: string) => string
  ) => options.map((option) => ({ ...option, label: t(option.label) }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders with label and required indicator", () => {
    render(
      <RadioGroup
        id={id}
        name="test"
        label="Test Label"
        required
        options={translateOptions(bookerTypeOptions, (key) => key)}
        onChange={onChangeMock}
      />
    );
    expect(screen.getByText(/Test Label/i)).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(bookerTypeOptions.length);
  });

  test("handles change event in English", () => {
    render(
      <RadioGroup
        id={id}
        name="test"
        label="Test Label"
        required
        options={translateOptions(bookerTypeOptions, (key) => key)}
        onChange={onChangeMock}
      />
    );
    const radio = screen.getByLabelText("BOOKER_PERSONAL");
    fireEvent.click(radio);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("personal");
  });

  test("displays error message in English", () => {
    render(
      <RadioGroup
        id={id}
        name="test"
        label="Test Label"
        required
        options={translateOptions(bookerTypeOptions, (key) => key)}
        error="This field is required."
      />
    );
    expect(screen.getByText("This field is required.")).toBeInTheDocument();
  });
});
