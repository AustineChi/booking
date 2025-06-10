import React from "react";
import { FieldErrors } from "react-hook-form";
import { AdditionalInformationTextarea } from "@/components/form-fields/AdditionalInformationTextarea/AdditionalInformationTextarea";
import { Button } from "@/components/form-fields/Button/Button";
import { RoomFormData } from "@/hooks/useRoomForm.hook";
import { RoomRequirementTranslations } from "@/models/RoomRequirementTranslations.model";
import { RoomSelection } from "@/components/form-fields/RoomSelection/RoomSelection";
interface RoomRequirementsFormProps {
  translations: RoomRequirementTranslations;
  checkboxValues: Record<string, boolean>;
  roomCounts: Record<string, number>;
  inputValues: Record<string, string>;
  displayTotalRoomsText: string;
  comments: string;
  errors: FieldErrors<RoomFormData>;
  onCheckboxChange: (id: string, checked: boolean) => void;
  onRoomChange: (roomType: string, count: number) => void;
  onInputChange: (roomType: string, value: string) => void;
  onBlur: (roomType: string) => void;
  onCommentsChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}
export const RoomRequirementsForm: React.FC<RoomRequirementsFormProps> = ({
  translations,
  checkboxValues,
  roomCounts,
  inputValues,
  displayTotalRoomsText,
  comments,
  errors,
  onCheckboxChange,
  onRoomChange,
  onInputChange,
  onBlur,
  onCommentsChange,
  onSubmit,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">{translations.ROOMS}</h2>
      <p className="mb-4 text-sm">{translations.ROOMS_DESCRIPTION}</p>

      <form onSubmit={onSubmit} className="space-y-4">
        <RoomSelection
          wrapperClassName="w-full"
          options={{
            checkboxes: [
              { id: "children", label: translations.TRAVELLING_WITH_CHILDREN },
              { id: "accessible", label: translations.ACCESSIBLE_NEEDED },
            ],
            roomTypes: [
              {
                id: "single",
                label: translations.SINGLE_OCCUPANCY,
                subLabel: translations.ROOM_TYPE_SINGLE_SUB,
              },
              {
                id: "double",
                label: translations.DOUBLE_OCCUPANCY,
                subLabel: translations.ROOM_TYPE_DOUBLE_SUB,
              },
              {
                id: "twin",
                label: translations.TWIN,
                subLabel: translations.ROOM_TYPE_DOUBLE_SUB,
              },
            ],
          }}
          values={{
            checkboxValues,
            roomCounts,
            inputValues,
          }}
          displayTotalRoomsText={displayTotalRoomsText}
          onChange={{
            checkbox: onCheckboxChange,
            room: onRoomChange,
            input: onInputChange,
          }}
          onBlur={onBlur}
        />

        <AdditionalInformationTextarea
          title={translations.ADDITIONAL_INFORMATION}
          instructions={translations.ADDITIONAL_INFO_INSTRUCTIONS}
          subInstructions={translations.ADDITIONAL_INFO_SUB_INSTRUCTIONS}
          id="comments"
          value={comments}
          onChange={onCommentsChange}
          placeholder={translations.COMMENTS_PLACEHOLDER}
          error={errors?.comments?.message ?? translations.FIELD_REQUIRED}
        />

        <Button type="submit" variant="primary" className="w-full">
          {translations.SUBMIT_REQUEST}
        </Button>
      </form>
    </div>
  );
};

RoomRequirementsForm.displayName = "RoomRequirementsForm";
