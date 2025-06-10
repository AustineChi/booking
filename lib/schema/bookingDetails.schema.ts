import * as yup from "yup";
import { dateRangeConfig } from "@/lib/constants";

export function getBookingDetailsSchema(translations: {
  FIELD_REQUIRED: string;
  CHECK_IN_EARLIER_THAN_TODAY: string;
  CHECK_OUT_EARLIER_THAN_CHECK_IN: string;
}) {
  return yup.object().shape({
    bookerType: yup.string().required(translations.FIELD_REQUIRED).default(""),
    stayType: yup.string().required(translations.FIELD_REQUIRED).default(""),
    schoolYouthBooking: yup
      .boolean()
      .required(translations.FIELD_REQUIRED)
      .default(false),
    reason: yup.string().required(translations.FIELD_REQUIRED).default(""),
    hotel: yup.string().required(translations.FIELD_REQUIRED).default(""),
    dateRange: yup
      .object({
        checkIn: yup
          .date()
          .optional()
          .min(
            dateRangeConfig.minDate,
            translations.CHECK_IN_EARLIER_THAN_TODAY
          ),
        checkOut: yup
          .date()
          .optional()
          .min(
            yup.ref("checkIn"),
            translations.CHECK_OUT_EARLIER_THAN_CHECK_IN
          ),
      })
      .default({ checkIn: undefined, checkOut: undefined }),
    packageType: yup.string().required(translations.FIELD_REQUIRED).default(""),
  });
}
