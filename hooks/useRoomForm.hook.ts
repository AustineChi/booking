"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useFormContext } from "@/context/FormContext";
import { getRoomRequirementsSchema } from "@/lib/schema/roomRequirements.schema";

import "react-toastify/dist/ReactToastify.css";

export interface RoomFormData {
  travellingWithChildren: boolean;
  accessibleNeeded: boolean;
  singleRooms: number;
  doubleRooms: number;
  twinRooms: number;
  comments: string;
}

interface UseRoomFormProps {
  translations: {
    FIELD_REQUIRED: string;
    SUBMIT_REQUEST: string;
  };
}

export const getSafeRoomData = (
  room?: Partial<RoomFormData>
): RoomFormData => ({
  accessibleNeeded: room?.accessibleNeeded ?? false,
  singleRooms: room?.singleRooms ?? 0,
  doubleRooms: room?.doubleRooms ?? 0,
  twinRooms: room?.twinRooms ?? 0,
  travellingWithChildren: room?.travellingWithChildren ?? false,
  comments: room?.comments ?? "",
});

// const isFormComplete = (formData: any) => {
//   const bookingRequired = [
//     "bookerType",
//     "stayType",
//     "reason",
//     "hotel",
//     "packageType",
//   ];
//   const contactRequired = ["title", "firstName", "lastName", "phone", "email"];

//   const bookingValid = bookingRequired.every(
//     (field) => formData.booking?.[field] && formData.booking[field] !== ""
//   );
//   const contactValid = contactRequired.every(
//     (field) => formData.contact?.[field] && formData.contact[field] !== ""
//   );

//   return bookingValid && contactValid;
// };

export function useRoomForm({ translations }: UseRoomFormProps) {
  const { formData } = useFormContext();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RoomFormData>({
    resolver: yupResolver(getRoomRequirementsSchema(translations)),
    defaultValues: getSafeRoomData(formData.room),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<RoomFormData> = async (data) => {
    const updatedFormData = { ...formData, room: data };

    // if (!isFormComplete(updatedFormData)) {
    //   toast.error(
    //     "Please complete all required fields in Booking Details and Contact Details before submitting."
    //   );
    //   return;
    // }

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFormData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message || `Form submitted successfully!`);
      } else {
        toast.error(result.message || "Submission failed");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return { control, handleSubmit: handleSubmit(onSubmit), setValue, errors };
}
