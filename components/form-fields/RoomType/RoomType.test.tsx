import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RoomType } from "./RoomType";

describe("RoomType Component", () => {
  const onDecrementMock = jest.fn();
  const onIncrementMock = jest.fn();
  const onInputChangeMock = jest.fn();
  const onBlurMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders with label, subLabel, inputValue, and ARIA attributes", async () => {
    const user = userEvent.setup();
    render(
      <RoomType
        id="test-room"
        label="Single Occupancy"
        subLabel="1 adult"
        value={1}
        inputValue="1"
        onDecrement={onDecrementMock}
        onIncrement={onIncrementMock}
        onInputChange={onInputChangeMock}
        onBlur={onBlurMock}
        className="custom-class"
      />
    );

    expect(screen.getByText("Single Occupancy")).toBeInTheDocument();
    expect(screen.getByText("1 adult")).toBeInTheDocument();

    const input = screen.getByRole("textbox", {
      name: /Single Occupancy count/i,
    });
    expect(input).toHaveValue("1");
    expect(input).toHaveAttribute("aria-live", "polite");
    expect(input).toHaveAttribute("aria-atomic", "true");

    const decrementButton = screen.getByRole("button", {
      name: /Decrease Single Occupancy count, current value 1/i,
    });
    const incrementButton = screen.getByRole("button", {
      name: /Increase Single Occupancy count, current value 1/i,
    });
    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).not.toHaveAttribute("aria-disabled", "true");

    const group = screen.getByRole("group", { name: /Single Occupancy/i });
    expect(group).toHaveAttribute("aria-labelledby", "test-room-label");

    await user.tab();
    expect(decrementButton).toHaveFocus();
    await user.tab();
    expect(input).toHaveFocus();
    await user.tab();
    expect(incrementButton).toHaveFocus();
  });

  test("handles decrement, increment, input change, and blur events", async () => {
    const user = userEvent.setup();
    render(
      <RoomType
        id="test-room"
        label="Single Occupancy"
        subLabel="1 adult"
        value={1}
        inputValue="1"
        onDecrement={onDecrementMock}
        onIncrement={onIncrementMock}
        onInputChange={onInputChangeMock}
        onBlur={onBlurMock}
      />
    );

    const decrementButton = screen.getByText("−");
    const incrementButton = screen.getByText("+");
    const input = screen.getByRole("textbox", {
      name: /Single Occupancy count/i,
    });

    await user.click(decrementButton);
    expect(onDecrementMock).toHaveBeenCalledTimes(1);
    await user.click(incrementButton);
    expect(onIncrementMock).toHaveBeenCalledTimes(1);

    await user.type(input, "2");
    expect(onInputChangeMock).toHaveBeenCalledTimes(1);
    expect(onInputChangeMock).toHaveBeenCalledWith(expect.any(Object));

    await user.click(input);
    await user.tab();
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  test("disables decrement button when value is 0", () => {
    render(
      <RoomType
        id="test-room"
        label="Single Occupancy"
        subLabel="1 adult"
        value={0}
        inputValue="0"
        onDecrement={onDecrementMock}
        onIncrement={onIncrementMock}
        onInputChange={onInputChangeMock}
        onBlur={onBlurMock}
      />
    );

    const decrementButton = screen.getByRole("button", {
      name: /Decrease Single Occupancy count, current value 0/i,
    });
    expect(decrementButton).toBeDisabled();
    expect(decrementButton).toHaveAttribute("aria-disabled", "true");
  });

  test("applies custom className and maintains accessibility", () => {
    render(
      <RoomType
        id="test-room"
        label="Single Occupancy"
        subLabel="1 adult"
        value={1}
        inputValue="1"
        onDecrement={onDecrementMock}
        onIncrement={onIncrementMock}
        onInputChange={onInputChangeMock}
        onBlur={onBlurMock}
        className="custom-class"
      />
    );

    const container = screen.getByRole("group", { name: /Single Occupancy/i });
    expect(container).toHaveClass("custom-class");
    expect(container).toHaveClass(
      "flex items-center justify-between p-2 border rounded-md"
    );
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-label",
      "Single Occupancy count"
    );
  });
});
