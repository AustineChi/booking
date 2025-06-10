import { render, screen, fireEvent } from "@testing-library/react";
import { HotelSearchInput } from "./HotelSearchInput";

describe("HotelSearchInput Component", () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders with placeholder and icon in English", () => {
    render(
      <HotelSearchInput
        id="test-hotel"
        onChange={onChangeMock}
        placeholder="Enter a hotel"
      />
    );
    expect(screen.getByPlaceholderText("Enter a hotel")).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });

  test("clears input when clear button is clicked", () => {
    render(
      <HotelSearchInput
        id="test-hotel"
        onChange={onChangeMock}
        placeholder="Enter a hotel"
      />
    );
    const input = screen.getByPlaceholderText("Enter a hotel");
    fireEvent.change(input, { target: { value: "London" } });
    fireEvent.click(screen.getByRole("button", { name: /Clear input/i }));
    expect(onChangeMock).toHaveBeenCalledWith("");
    expect(input).toHaveValue("");
  });

  test("selects suggestion when clicked", () => {
    render(
      <HotelSearchInput
        id="test-hotel"
        onChange={onChangeMock}
        placeholder="Enter a hotel"
      />
    );
    const input = screen.getByPlaceholderText("Enter a hotel");
    fireEvent.change(input, { target: { value: "Lond" } });
    fireEvent.click(screen.getByText("Derry / Londonderry"));
    expect(onChangeMock).toHaveBeenCalledWith("Derry / Londonderry");
    expect(input).toHaveValue("Derry / Londonderry");
  });
});
