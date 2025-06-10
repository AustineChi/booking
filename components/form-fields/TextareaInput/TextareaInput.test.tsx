import { render, screen, fireEvent } from "@testing-library/react";
import { TextareaInput } from "./TextareaInput";

describe("TextareaInput Component", () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders with placeholder and handles change in English", () => {
    render(
      <TextareaInput
        id="test-input"
        placeholder="Comments"
        onChange={onChangeMock}
      />
    );
    expect(screen.getByPlaceholderText("Comments")).toBeInTheDocument();
    const textarea = screen.getByPlaceholderText("Comments");
    fireEvent.change(textarea, { target: { value: "Test input" } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("Test input");
  });

  test("displays error state", () => {
    render(
      <TextareaInput
        id="test-input"
        error="This field has an error."
        onChange={onChangeMock}
      />
    );
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("This field has an error.")).toBeInTheDocument();
  });

  test("is disabled when disabled prop is true", () => {
    render(<TextareaInput id="test-input" disabled onChange={onChangeMock} />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
