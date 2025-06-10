import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { RoomType } from "../RoomType/RoomType";

interface CheckboxOption {
  id: string;
  label: string;
}

interface RoomTypeOption {
  id: string;
  label: string;
  subLabel: string;
}

interface RoomSelectionProps {
  options: {
    checkboxes: CheckboxOption[];
    roomTypes: RoomTypeOption[];
  };
  values: {
    checkboxValues: Record<string, boolean>;
    roomCounts: Record<string, number>;
    inputValues: Record<string, string>;
  };
  displayTotalRoomsText: string;
  onChange: {
    checkbox: (id: string, checked: boolean) => void;
    room: (roomType: string, count: number) => void;
    input: (roomType: string, value: string) => void;
  };
  onBlur: (roomType: string) => void;
  className?: string;
  wrapperClassName?: string;
}

export const RoomSelection = React.memo(
  ({
    options: { checkboxes, roomTypes },
    values: { checkboxValues, roomCounts, inputValues },
    displayTotalRoomsText,
    onChange: {
      checkbox: onCheckboxChange,
      room: onRoomChange,
      input: onInputChange,
    },
    onBlur,
    className = "",
    wrapperClassName = "",
  }: RoomSelectionProps) => {
    return (
      <div
        className={`flex flex-col ${wrapperClassName}`}
        role="group"
        aria-label="Room selection options"
      >
        {checkboxes.map((option) => (
          <Checkbox
            key={option.id}
            id={`${option.id}-checkbox`}
            name={`${option.id}-checkbox`}
            label={option.label}
            checked={checkboxValues[option.id] || false}
            onChange={(checked) => onCheckboxChange(option.id, checked)}
            className={`w-full ${className}`}
            aria-describedby={`${option.id}-error`}
          />
        ))}
        {roomTypes.map((room) => (
          <RoomType
            key={room.id}
            id={`${room.id}-room`}
            label={room.label}
            subLabel={room.subLabel}
            value={roomCounts[room.id] || 0}
            inputValue={inputValues[room.id] || ""}
            onDecrement={() =>
              onRoomChange(room.id, (roomCounts[room.id] || 0) - 1)
            }
            onIncrement={() =>
              onRoomChange(room.id, (roomCounts[room.id] || 0) + 1)
            }
            onInputChange={(e) => onInputChange(room.id, e.target.value)}
            onBlur={() => onBlur(room.id)}
            className="w-full"
            aria-describedby={`${room.id}-info`}
          />
        ))}
        <div className="flex justify-end mt-2 text-[--color-text]">
          <span id="total-rooms">{displayTotalRoomsText}</span>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.options.checkboxes === nextProps.options.checkboxes &&
      prevProps.options.roomTypes === nextProps.options.roomTypes &&
      prevProps.values.checkboxValues === nextProps.values.checkboxValues &&
      prevProps.values.roomCounts === nextProps.values.roomCounts &&
      prevProps.values.inputValues === nextProps.values.inputValues &&
      prevProps.displayTotalRoomsText === nextProps.displayTotalRoomsText &&
      prevProps.onChange.checkbox === nextProps.onChange.checkbox &&
      prevProps.onChange.room === nextProps.onChange.room &&
      prevProps.onChange.input === nextProps.onChange.input &&
      prevProps.onBlur === nextProps.onBlur &&
      prevProps.className === nextProps.className &&
      prevProps.wrapperClassName === nextProps.wrapperClassName
    );
  }
);

RoomSelection.displayName = "RoomSelection";
