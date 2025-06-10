import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  const onClickMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("handles click event", () => {
    render(<Button onClick={onClickMock}>Click me</Button>);
    const button = screen.getByRole("button", { name: /Click me/i });
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("renders as disabled", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button", { name: /Disabled/i });
    expect(button).toBeDisabled();
  });

  test("passes additional HTML attributes", () => {
    render(<Button aria-label="Custom label">Aria</Button>);
    const button = screen.getByRole("button", { name: /Custom label/i });
    expect(button).toHaveAttribute("aria-label", "Custom label");
  });
});
