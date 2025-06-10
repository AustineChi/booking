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
  checkboxOptions: CheckboxOption[];
  roomTypes: RoomTypeOption[];
  accessibleNeeded: boolean;
  stayingWithChildren: boolean;
  roomCounts: Record<string, number>;
  inputValues: Record<string, string>;
  displayTotalRoomsText: string;
  onAccessibleChange: (checked: boolean, id: string) => void;
  onChildrenChange: (checked: boolean, id: string) => void;
  onRoomChange: (roomType: string, count: number) => void;
  onInputChange: (roomType: string, value: string) => void;
  onBlur: (roomType: string) => void;
  className?: string;
  wrapperClassName?: string;
}

export default function RoomSelection({
  checkboxOptions,
  roomTypes,
  accessibleNeeded,
  stayingWithChildren,
  roomCounts,
  inputValues,
  displayTotalRoomsText,
  onAccessibleChange,
  onChildrenChange,
  onRoomChange,
  onInputChange,
  onBlur,
  className = "",
  wrapperClassName = "",
}: RoomSelectionProps) {
  return (
    <div className={`flex flex-col ${wrapperClassName}`}>
      {checkboxOptions.map((option) => (
        <Checkbox
          key={option.id}
          id={`${option.id}-checkbox`}
          name={`${option.id}-checkbox`}
          label={option.label}
          checked={
            option.id === "accessible" ? accessibleNeeded : stayingWithChildren
          }
          onChange={(checked) =>
            option.id === "accessible"
              ? onAccessibleChange(checked, option.id)
              : onChildrenChange(checked, option.id)
          }
          className={`w-full ${className}`}
        />
      ))}
      {roomTypes.map((room) => (
        <RoomType
          key={room.id}
          id={`${room.id}-room`}
          label={room.label}
          subLabel={room.subLabel}
          value={roomCounts[room.id]}
          inputValue={inputValues[room.id]}
          onDecrement={() => onRoomChange(room.id, roomCounts[room.id] - 1)}
          onIncrement={() => onRoomChange(room.id, roomCounts[room.id] + 1)}
          onInputChange={(e) => onInputChange(room.id, e.target.value)}
          onBlur={() => onBlur(room.id)}
          className="w-full"
        />
      ))}
      <div className="flex justify-end mt-2 text-[--color-text]">
        <span>{displayTotalRoomsText}</span>
      </div>
    </div>
  );
}
