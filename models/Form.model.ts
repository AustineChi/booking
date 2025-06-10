export interface FormData {
  contact: {
    title: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
  booking: {
    bookerType: string;
    stayType: string;
    schoolYouthBooking: boolean;
    reason: string;
    hotel: string; 
    dateRange: {
      checkIn?: Date;
      checkOut?: Date;
    };
    packageType: string;
  };
  room: {
    travellingWithChildren: boolean;
    accessibleNeeded: boolean;
    singleRooms: number;
    doubleRooms: number;
    twinRooms: number;
    comments: string;
  };
}

export type FormStep = "contact" | "booking" | "room";
