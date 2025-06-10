import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { RoomRequirementsForm } from "./RoomRequirementsForm";
import { useRoomSelection } from "@/hooks/useRoomSelection.hook";
import { RoomRequirementTranslations } from "@/models/RoomRequirementTranslations.model";
import { formatTotalRoomsText } from "@/lib/functions/formatTotalRoomsText";
import { useFormContext } from "@/context/FormContext";
import { RoomFormData, useRoomForm } from "@/hooks/useRoomForm.hook";

interface RoomRequirementsProps {
  translations: RoomRequirementTranslations;
  control: Control<RoomFormData>;
  errors: FieldErrors<RoomFormData>;
  handleSubmit: () => void;
}

export const RoomRequirements = React.memo(
  ({ translations, control, errors, handleSubmit }: RoomRequirementsProps) => {
    const { activeStep, formData } = useFormContext();
    const { setValue } = useRoomForm({ translations });

    const {
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
    } = useRoomSelection({
      initialAccessible: formData.room?.accessibleNeeded ?? false,
      initialWithChildren: formData.room?.travellingWithChildren ?? false,
      initialRoomCounts: {
        single: formData.room?.singleRooms ?? 0,
        double: formData.room?.doubleRooms ?? 0,
        twin: formData.room?.twinRooms ?? 0,
      },
      onAccessibleChange: (value) => setValue("accessibleNeeded", value),
      onChildrenChange: (value) => setValue("travellingWithChildren", value),
      onRoomChange: (roomType, count) => {
        if (roomType === "single") setValue("singleRooms", count);
        if (roomType === "double") setValue("doubleRooms", count);
        if (roomType === "twin") setValue("twinRooms", count);
      },
    });

    if (activeStep !== "room") return null;

    return (
      <Controller
        name="comments"
        control={control}
        render={({ field }) => (
          <RoomRequirementsForm
            translations={translations}
            accessibleNeeded={accessibleNeeded}
            stayingWithChildren={stayingWithChildren}
            roomCounts={roomCounts}
            inputValues={inputValues}
            displayTotalRoomsText={formatTotalRoomsText(
              translations.TOTAL_ROOMS,
              totalRooms
            )}
            comments={field.value}
            errors={errors}
            onAccessibleChange={handleAccessibleChange}
            onChildrenChange={handleChildrenChange}
            onRoomChange={handleRoomChange}
            onInputChange={handleInputChange}
            onBlur={handleBlur}
            onCommentsChange={field.onChange}
            onSubmit={handleSubmit}
          />
        )}
      />
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.translations === nextProps.translations &&
      prevProps.errors === nextProps.errors &&
      prevProps.control === nextProps.control &&
      prevProps.handleSubmit === nextProps.handleSubmit
    );
  }
);

RoomRequirements.displayName = "RoomRequirements";
