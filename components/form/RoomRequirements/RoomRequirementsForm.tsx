import { AdditionalInformationTextarea } from "@/components/form-fields/AdditionalInformationTextarea/AdditionalInformationTextarea";
import { Button } from "@/components/form-fields/Button/Button";
import RoomSelection from "@/components/form-fields/RoomSelection/RoomSelection";
import { RoomFormData } from "@/hooks/useRoomForm.hook";
import { RoomRequirementTranslations } from "@/models/RoomRequirementTranslations.model";
import { FieldErrors } from "react-hook-form";

interface RoomRequirementsFormProps {
  translations: RoomRequirementTranslations;
  accessibleNeeded: boolean;
  stayingWithChildren: boolean;
  roomCounts: Record<string, number>;
  inputValues: Record<string, string>;
  displayTotalRoomsText: string;
  comments: string;
  errors: FieldErrors<RoomFormData>;
  onAccessibleChange: (checked: boolean, id: string) => void;
  onChildrenChange: (checked: boolean, id: string) => void;
  onRoomChange: (roomType: string, count: number) => void;
  onInputChange: (roomType: string, value: string) => void;
  onBlur: (roomType: string) => void;
  onCommentsChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const RoomRequirementsForm: React.FC<RoomRequirementsFormProps> = ({
  translations,
  accessibleNeeded,
  stayingWithChildren,
  roomCounts,
  inputValues,
  displayTotalRoomsText,
  comments,
  errors,
  onAccessibleChange,
  onChildrenChange,
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
          checkboxOptions={[
            { id: "children", label: translations.TRAVELLING_WITH_CHILDREN },
            { id: "accessible", label: translations.ACCESSIBLE_NEEDED },
          ]}
          roomTypes={[
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
          ]}
          accessibleNeeded={accessibleNeeded}
          stayingWithChildren={stayingWithChildren}
          roomCounts={roomCounts}
          inputValues={inputValues}
          displayTotalRoomsText={displayTotalRoomsText}
          onAccessibleChange={onAccessibleChange}
          onChildrenChange={onChildrenChange}
          onRoomChange={onRoomChange}
          onInputChange={onInputChange}
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
          error={errors.comments?.message}
        />

        <Button type="submit" variant="primary" className="w-full">
          {translations.SUBMIT_REQUEST}
        </Button>
      </form>
    </div>
  );
};
