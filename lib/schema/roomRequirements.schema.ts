import * as yup from "yup";

export function getRoomRequirementsSchema(translations: {
  FIELD_REQUIRED: string;
}) {
  return yup.object().shape({
    travellingWithChildren: yup.boolean().default(false),
    accessibleNeeded: yup.boolean().default(false),
    singleRooms: yup.number().min(0).default(0),
    doubleRooms: yup.number().min(0).default(0),
    twinRooms: yup.number().min(0).default(0),
    comments: yup.string().required(translations.FIELD_REQUIRED).default(""),
  });
}
