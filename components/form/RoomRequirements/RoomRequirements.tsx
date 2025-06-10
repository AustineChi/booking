import React from "react";
import { Control, FieldErrors } from "react-hook-form";
import { RoomRequirementsForm } from "./RoomRequirementsForm";
import { RoomRequirementTranslations } from "@/models/RoomRequirementTranslations.model";
import { RoomFormData } from "@/hooks/useRoomForm.hook";
import { useRoomRequirements } from "@/hooks/useRoomRequirements.hook";

interface RoomRequirementsProps {
  translations: RoomRequirementTranslations;
  control: Control<RoomFormData>;
  errors: FieldErrors<RoomFormData>;
  handleSubmit: () => void;
}

export const RoomRequirements = React.memo(
  ({ translations, control, errors, handleSubmit }: RoomRequirementsProps) => {
    const {
      shouldRender,
      checkboxValues,
      roomCounts,
      comments,
      inputValues,
      formattedTotalRoomsText,
      onCheckboxChange,
      onRoomChange,
      onInputChange,
      onBlur,
      onCommentsChange,
    } = useRoomRequirements(translations, control);

    if (!shouldRender) return null;

    return (
      <RoomRequirementsForm
        translations={translations}
        checkboxValues={checkboxValues}
        roomCounts={roomCounts}
        inputValues={inputValues}
        displayTotalRoomsText={formattedTotalRoomsText}
        comments={comments}
        errors={errors}
        onCheckboxChange={onCheckboxChange}
        onRoomChange={onRoomChange}
        onInputChange={onInputChange}
        onBlur={onBlur}
        onCommentsChange={onCommentsChange}
        onSubmit={handleSubmit}
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
