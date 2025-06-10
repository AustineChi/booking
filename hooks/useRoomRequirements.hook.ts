import { useCallback, useState } from "react";
import { useController, Control } from "react-hook-form";
import { formatTotalRoomsText } from "@/lib/functions/formatTotalRoomsText";
import { RoomRequirementTranslations } from "@/models/RoomRequirementTranslations.model";
import { RoomFormData } from "@/hooks/useRoomForm.hook";
import { FormData } from "@/models/Form.model";
import { useFormContext } from "@/context/FormContext";

export function useRoomRequirements(
  translations: RoomRequirementTranslations,
  control: Control<RoomFormData>
) {
  const { activeStep, formData, setFormData } = useFormContext();

  const accessibleNeededField = useController({
    control,
    name: "accessibleNeeded",
    defaultValue: formData.room?.accessibleNeeded ?? false,
  });
  const travellingWithChildrenField = useController({
    control,
    name: "travellingWithChildren",
    defaultValue: formData.room?.travellingWithChildren ?? false,
  });
  const singleRoomsField = useController({
    control,
    name: "singleRooms",
    defaultValue: formData.room?.singleRooms ?? 0,
  });
  const doubleRoomsField = useController({
    control,
    name: "doubleRooms",
    defaultValue: formData.room?.doubleRooms ?? 0,
  });
  const twinRoomsField = useController({
    control,
    name: "twinRooms",
    defaultValue: formData.room?.twinRooms ?? 0,
  });
  const commentsField = useController({
    control,
    name: "comments",
    defaultValue: formData.room?.comments ?? "",
  });

  const checkboxValues: Record<string, boolean> = {
    accessible: accessibleNeededField.field.value,
    children: travellingWithChildrenField.field.value,
  };

  const roomCounts: Record<string, number> = {
    single: singleRoomsField.field.value,
    double: doubleRoomsField.field.value,
    twin: twinRoomsField.field.value,
  };

  const [inputValues, setInputValues] = useState<Record<string, string>>(
    Object.fromEntries(
      Object.entries(roomCounts).map(([key, value]) => [key, String(value)])
    )
  );

  const totalRooms = Object.values(roomCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  const handleCheckboxChange = useCallback(
    (id: string, checked: boolean) => {
      if (id === "accessible") {
        accessibleNeededField.field.onChange(checked);
      } else if (id === "children") {
        travellingWithChildrenField.field.onChange(checked);
      }

      const room = formData.room as FormData["room"];
      setFormData({
        ...formData,
        room: {
          ...room,
          accessibleNeeded:
            id === "accessible" ? checked : room.accessibleNeeded,
          travellingWithChildren:
            id === "children" ? checked : room.travellingWithChildren,
        },
      });
    },
    [accessibleNeededField, travellingWithChildrenField, formData, setFormData]
  );

  const handleRoomChange = useCallback(
    (roomType: string, count: number) => {
      const newCount = Math.max(0, count);
      setInputValues((prev) => ({ ...prev, [roomType]: String(newCount) }));

      const room = formData.room as FormData["room"];
      setFormData({
        ...formData,
        room: {
          ...room,
          singleRooms: roomType === "single" ? newCount : room.singleRooms,
          doubleRooms: roomType === "double" ? newCount : room.doubleRooms,
          twinRooms: roomType === "twin" ? newCount : room.twinRooms,
        },
      });

      if (roomType === "single") singleRoomsField.field.onChange(newCount);
      else if (roomType === "double") doubleRoomsField.field.onChange(newCount);
      else if (roomType === "twin") twinRoomsField.field.onChange(newCount);
    },
    [formData, setFormData, singleRoomsField, doubleRoomsField, twinRoomsField]
  );

  const handleInputChange = useCallback((roomType: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [roomType]: value }));
  }, []);

  const handleBlur = useCallback(
    (roomType: string) => {
      const value = inputValues[roomType];
      const parsedValue = parseInt(value, 10);
      const newCount = isNaN(parsedValue) || parsedValue < 0 ? 0 : parsedValue;

      setInputValues((prev) => ({ ...prev, [roomType]: String(newCount) }));
      handleRoomChange(roomType, newCount);
    },
    [inputValues, handleRoomChange]
  );

  const handleCommentsChange = useCallback(
    (value: string) => {
      commentsField.field.onChange(value);
      const room = formData.room as FormData["room"];
      setFormData({
        ...formData,
        room: {
          ...room,
          comments: value,
        },
      });
    },
    [commentsField, formData, setFormData]
  );

  const errors: Record<string, string | undefined> = {
    accessibleNeeded: accessibleNeededField.fieldState.error?.message,
    travellingWithChildren:
      travellingWithChildrenField.fieldState.error?.message,
    singleRooms: singleRoomsField.fieldState.error?.message,
    doubleRooms: doubleRoomsField.fieldState.error?.message,
    twinRooms: twinRoomsField.fieldState.error?.message,
    comments: commentsField.fieldState.error?.message,
  };

  return {
    shouldRender: activeStep === "room",
    checkboxValues,
    roomCounts,
    comments: commentsField.field.value,
    inputValues,
    totalRooms,
    formattedTotalRoomsText: formatTotalRoomsText(
      translations.TOTAL_ROOMS,
      totalRooms
    ),
    errors,
    onCheckboxChange: handleCheckboxChange,
    onRoomChange: handleRoomChange,
    onInputChange: handleInputChange,
    onBlur: handleBlur,
    onCommentsChange: handleCommentsChange,
  };
}
