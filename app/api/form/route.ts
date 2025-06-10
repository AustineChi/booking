import { NextResponse } from "next/server";
import { FormData } from "@/models/Form.model";
import * as yup from "yup";
import { getBookingDetailsSchema } from "@/lib/schema/bookingDetails.schema";
import { getContactDetailsSchema } from "@/lib/schema/contactDetails.schema";
import { getRoomRequirementsSchema } from "@/lib/schema/roomRequirements.schema";

interface Translations {
  FIELD_REQUIRED: string;
  CHECK_IN_EARLIER_THAN_TODAY: string;
  CHECK_OUT_EARLIER_THAN_CHECK_IN: string;
  MAX_LENGTH_ERROR_FIRST_NAME: string;
  MAX_LENGTH_ERROR_LAST_NAME: string;
  PHONE_INVALID: string;
  EMAIL_INVALID: string;
}

const getFormSchema = (translations: Translations) => {
  return yup.object().shape({
    booking: getBookingDetailsSchema(translations),
    contact: getContactDetailsSchema(translations),
    room: getRoomRequirementsSchema(translations),
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const translations = {
      FIELD_REQUIRED: "This field is required",
      CHECK_IN_EARLIER_THAN_TODAY: "Check-in date must be today or later",
      CHECK_OUT_EARLIER_THAN_CHECK_IN: "Check-out date must be after check-in",
      MAX_LENGTH_ERROR_FIRST_NAME: "First name must be 20 characters or less",
      MAX_LENGTH_ERROR_LAST_NAME: "Last name must be 30 characters or less",
      PHONE_INVALID: "Please enter a valid phone number",
      EMAIL_INVALID: "Please enter a valid email address",
    };

    const schema = getFormSchema(translations);
    const validatedData = await schema.validate(body, { abortEarly: false });

    console.log("Simulated save to database:", validatedData);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const errors = error.inner.reduce((acc: Record<string, string>, err) => {
        if (err.path) acc[err.path] = err.message;
        return acc;
      }, {});
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Validation failed. Please check the errors.",
        },
        { status: 400 }
      );
    }
    console.error("Server error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const initialData: Partial<FormData> = {
      booking: {
        bookerType: "",
        stayType: "",
        schoolYouthBooking: false,
        reason: "",
        hotel: "",
        dateRange: { checkIn: undefined, checkOut: undefined },
        packageType: "",
      },
      contact: {
        title: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      },
      room: {
        travellingWithChildren: false,
        accessibleNeeded: false,
        singleRooms: 0,
        doubleRooms: 0,
        twinRooms: 0,
        comments: "",
      },
    };
    return NextResponse.json(initialData);
  } catch (error) {
    console.error("Failed to fetch initial form data:", error);
    return NextResponse.json({}, { status: 500 });
  }
}