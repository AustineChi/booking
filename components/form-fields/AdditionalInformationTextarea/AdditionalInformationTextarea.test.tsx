import { render, screen, fireEvent } from "@testing-library/react";
import { AdditionalInformationTextarea } from "./AdditionalInformationTextarea";

describe("AdditionalInformationTextarea Component", () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders with label, instructions, and placeholder", () => {
    render(
      <AdditionalInformationTextarea
        id="test-field"
        title="Additional information"
        instructions="Let us know if you have any additional information or special requests"
        subInstructions="If you do not require the same number of rooms on each night of your stay, please state below the number and type of rooms required each night."
        onChange={onChangeMock}
        placeholder="Comments"
        required={false}
      />
    );
    expect(screen.getByText("Additional information")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Let us know if you have any additional information or special requests"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "If you do not require the same number of rooms on each night of your stay, please state below the number and type of rooms required each night."
      )
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Comments")).toBeInTheDocument();
  });

  test("handles change event in English", () => {
    render(
      <AdditionalInformationTextarea
        id="test-field"
        title="Additional information"
        onChange={onChangeMock}
        placeholder="Comments"
      />
    );
    const textarea = screen.getByPlaceholderText("Comments");
    fireEvent.change(textarea, { target: { value: "Test comment" } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("Test comment");
  });

  test("displays error message in English", () => {
    render(
      <AdditionalInformationTextarea
        id="test-field"
        title="Additional information"
        error="This field has an error."
        onChange={onChangeMock}
        placeholder="Comments"
      />
    );
    expect(screen.getByText("This field has an error.")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });
});
