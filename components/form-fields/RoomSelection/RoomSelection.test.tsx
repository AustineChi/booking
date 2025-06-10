import { render, screen, fireEvent } from "@testing-library/react";
import { RoomSelection } from "./RoomSelection";

describe("RoomSelection Component", () => {
  const baseProps = {
    checkboxOptions: [
      { id: "children", label: "Travelling/staying with children." },
      { id: "accessible", label: "Accessible room is needed." },
    ],
    roomTypes: [
      { id: "single", label: "Single Occupancy", subLabel: "1 person" },
      { id: "double", label: "Double Occupancy", subLabel: "2 persons" },
      { id: "twin", label: "Twin", subLabel: "2 beds" },
    ],
    roomCounts: { single: 0, double: 0, twin: 0 },
    inputValues: { single: "0", double: "0", twin: "0" },
    accessibleNeeded: false,
    stayingWithChildren: false,
    displayTotalRoomsText: "Total: 0 rooms",
    onAccessibleChange: jest.fn(),
    onChildrenChange: jest.fn(),
    onRoomChange: jest.fn(),
    onInputChange: jest.fn(),
    onBlur: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with checkboxes and room types with provided props", () => {
    render(<RoomSelection {...baseProps} />);
    expect(
      screen.getByLabelText("Travelling/staying with children.")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Accessible room is needed.")
    ).toBeInTheDocument();
    expect(screen.getByText("Single Occupancy")).toBeInTheDocument();
    expect(screen.getByText("Double Occupancy")).toBeInTheDocument();
    expect(screen.getByText("Twin")).toBeInTheDocument();
    expect(screen.getByText("Total: 0 rooms")).toBeInTheDocument();
  });

  it("updates total when room count changes", () => {
    const updatedProps = {
      ...baseProps,
      roomCounts: { single: 1, double: 0, twin: 0 },
      displayTotalRoomsText: "Total: 1 rooms",
    };
    render(<RoomSelection {...updatedProps} />);
    expect(screen.getByText("Total: 1 rooms")).toBeInTheDocument();
  });

  it("toggles accessible checkbox", () => {
    render(<RoomSelection {...baseProps} />);
    const checkbox = screen.getByLabelText("Accessible room is needed.");
    fireEvent.click(checkbox);
    expect(baseProps.onAccessibleChange).toHaveBeenCalledWith(
      true,
      "accessible"
    );
  });
});
