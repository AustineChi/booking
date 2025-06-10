import { useState } from "react";
import { useFormContext } from "@/context/FormContext";
import { getSafeRoomData } from "./useRoomForm.hook";

interface UseRoomSelectionProps {
  initialAccessible: boolean;
  initialWithChildren: boolean;
  initialRoomCounts: Record<string, number>;
  onAccessibleChange: (value: boolean) => void;
  onChildrenChange: (value: boolean) => void;
  onRoomChange: (roomType: string, count: number) => void;
}

export function useRoomSelection({
  initialAccessible,
  initialWithChildren,
  initialRoomCounts,
  onAccessibleChange,
  onChildrenChange,
  onRoomChange,
}: UseRoomSelectionProps) {
  const { formData, setFormData } = useFormContext();
  const roomData = getSafeRoomData(formData.room);

  const [accessibleNeeded, setAccessibleNeeded] = useState(
    roomData.accessibleNeeded ?? initialAccessible
  );
  const [stayingWithChildren, setStayingWithChildren] = useState(
    roomData.travellingWithChildren ?? initialWithChildren
  );
  const [roomCounts, setRoomCounts] = useState<Record<string, number>>({
    single: roomData.singleRooms ?? initialRoomCounts.single,
    double: roomData.doubleRooms ?? initialRoomCounts.double,
    twin: roomData.twinRooms ?? initialRoomCounts.twin,
  });
  const [inputValues, setInputValues] = useState<Record<string, string>>({
    single: String(roomData.singleRooms ?? initialRoomCounts.single),
    double: String(roomData.doubleRooms ?? initialRoomCounts.double),
    twin: String(roomData.twinRooms ?? initialRoomCounts.twin),
  });

  const totalRooms = Object.values(roomCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  const appendComment = (comment: string) => {
    const currentRoomData = getSafeRoomData(formData.room);
    const currentComments = currentRoomData.comments;
    const timestamp = new Date().toISOString();
    const updatedComments = currentComments
      ? `${currentComments}\n[${timestamp}] ${comment}`
      : `[${timestamp}] ${comment}`;
    setFormData({
      ...formData,
      room: { ...currentRoomData, comments: updatedComments },
    });
  };

  const handleAccessibleChange = (checked: boolean, id: string) => {
    setAccessibleNeeded(checked);
    onAccessibleChange(checked);
    const currentRoomData = getSafeRoomData(formData.room);
    setFormData({
      ...formData,
      room: { ...currentRoomData, accessibleNeeded: checked },
    });
  };

  const handleChildrenChange = (checked: boolean, id: string) => {
    setStayingWithChildren(checked);
    onChildrenChange(checked);
    const currentRoomData = getSafeRoomData(formData.room);
    setFormData({
      ...formData,
      room: { ...currentRoomData, travellingWithChildren: checked },
    });
  };

  const handleRoomChange = (roomType: string, count: number) => {
    console.log(roomType, count, "handleRoomChange called");
    const newCount = Math.max(0, count);
    setRoomCounts((prev) => ({ ...prev, [roomType]: newCount }));
    setInputValues((prev) => ({ ...prev, [roomType]: String(newCount) }));
    onRoomChange(roomType, newCount);
    const currentRoomData = getSafeRoomData(formData.room);
    setFormData({
      ...formData,
      room: {
        ...currentRoomData,
        singleRooms:
          roomType === "single" ? newCount : currentRoomData.singleRooms,
        doubleRooms:
          roomType === "double" ? newCount : currentRoomData.doubleRooms,
        twinRooms: roomType === "twin" ? newCount : currentRoomData.twinRooms,
      },
    });
  };

  const handleInputChange = (roomType: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [roomType]: value }));
  };

  const handleBlur = (roomType: string) => {
    const value = inputValues[roomType];
    const parsedValue = parseInt(value, 10);
    const newCount = isNaN(parsedValue) || parsedValue < 0 ? 0 : parsedValue;
    setRoomCounts((prev) => ({ ...prev, [roomType]: newCount }));
    setInputValues((prev) => ({ ...prev, [roomType]: String(newCount) }));
    onRoomChange(roomType, newCount);
    const currentRoomData = getSafeRoomData(formData.room);
    setFormData({
      ...formData,
      room: {
        ...currentRoomData,
        singleRooms:
          roomType === "single" ? newCount : currentRoomData.singleRooms,
        doubleRooms:
          roomType === "double" ? newCount : currentRoomData.doubleRooms,
        twinRooms: roomType === "twin" ? newCount : currentRoomData.twinRooms,
      },
    });
    appendComment(`${roomType} room count changed to: ${newCount}`);
  };

  return {
    accessibleNeeded,
    stayingWithChildren,
    roomCounts,
    inputValues,
    totalRooms,
    handleAccessibleChange,
    handleChildrenChange,
    handleRoomChange,
    handleInputChange,
    handleBlur,
  };
}