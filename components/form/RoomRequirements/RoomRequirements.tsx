import React from "react";
import { Control, FieldErrors } from "react-hook-form";
import { RoomRequirementsForm } from "./RoomRequirementsForm";
import { RoomRequirementTranslations } from "@/models/RoomRequirementTranslations.model";
import { RoomFormData } from "@/hooks/useRoomForm.hook";
import { useRoomRequirements } from "@/hooks/useRoomRequirements.hook";

interface RoomRequirementsProps {
  translations: RoomRequirementTranslations;
  control: Control<RoomFormData>;
  formErrors: FieldErrors<RoomFormData>;
  handleSubmit: () => void;
}

export const RoomRequirements = React.memo(
  ({
    translations,
    control,
    formErrors,
    handleSubmit,
  }: RoomRequirementsProps) => {
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
        errors={formErrors}
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
      prevProps.formErrors === nextProps.formErrors &&
      prevProps.control === nextProps.control &&
      prevProps.handleSubmit === nextProps.handleSubmit
    );
  }
);

RoomRequirements.displayName = "RoomRequirements";
