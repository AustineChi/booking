export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

export const countries: Country[] = [
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "AF", name: "Afghanistan", dialCode: "+93", flag: "🇦🇫" },
  { code: "AL", name: "Albania", dialCode: "+355", flag: "🇦🇱" },
  { code: "DZ", name: "Algeria", dialCode: "+213", flag: "🇩🇿" },
  { code: "AD", name: "Andorra", dialCode: "+376", flag: "🇦🇩" },
  { code: "AO", name: "Angola", dialCode: "+244", flag: "🇦🇴" },
  { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷" },
  { code: "AM", name: "Armenia", dialCode: "+374", flag: "🇦🇲" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭" },
  { code: "TW", name: "Taiwan", dialCode: "+886", flag: "🇹🇼" },
  { code: "TZ", name: "Tanzania", dialCode: "+255", flag: "🇹🇿" },
  { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
  { code: "TG", name: "Togo", dialCode: "+228", flag: "🇹🇬" },
  { code: "TN", name: "Tunisia", dialCode: "+216", flag: "🇹🇳" },
  { code: "TR", name: "Turkey", dialCode: "+90", flag: "🇹🇷" },
  { code: "UG", name: "Uganda", dialCode: "+256", flag: "🇺🇬" },
  { code: "UA", name: "Ukraine", dialCode: "+380", flag: "🇺🇦" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "UY", name: "Uruguay", dialCode: "+598", flag: "🇺🇾" },
  { code: "UZ", name: "Uzbekistan", dialCode: "+998", flag: "🇺🇿" },
  { code: "VE", name: "Venezuela", dialCode: "+58", flag: "🇻🇪" },
  { code: "VN", name: "Vietnam", dialCode: "+84", flag: "🇻🇳" },
  { code: "YE", name: "Yemen", dialCode: "+967", flag: "🇾🇪" },
  { code: "ZM", name: "Zambia", dialCode: "+260", flag: "🇿🇲" },
  { code: "ZW", name: "Zimbabwe", dialCode: "+263", flag: "🇿🇼" },
];

export const titleOptions = [
  { value: "mr", label: "TITLE_MR" },
  { value: "mrs", label: "TITLE_MRS" },
  { value: "ms", label: "TITLE_MS" },
  { value: "miss", label: "TITLE_MISS" },
  { value: "mx", label: "TITLE_MX" },
  { value: "master", label: "TITLE_MASTER" },
  { value: "dr", label: "TITLE_DR" },
  { value: "lord", label: "TITLE_LORD" },
  { value: "lady", label: "TITLE_LADY" },
  { value: "sir", label: "TITLE_SIR" },
  { value: "col", label: "TITLE_COL" },
  { value: "prof", label: "TITLE_PROF" },
  { value: "rev", label: "TITLE_REV" },
];

export const reasonOptions = [
  { value: "association", label: "REASON_ASSOCIATION" },
  { value: "bus_tour", label: "REASON_BUS_TOUR" },
  { value: "business_meeting", label: "REASON_BUSINESS_MEETING" },
  { value: "charity_event", label: "REASON_CHARITY_EVENT" },
  { value: "convention_conference", label: "REASON_CONVENTION_CONFERENCE" },
  { value: "government", label: "REASON_GOVERNMENT" },
  { value: "graduation_reunion", label: "REASON_GRADUATION_REUNION" },
  { value: "layover", label: "REASON_LAYOVER" },
  { value: "leisure_tour", label: "REASON_LEISURE_TOUR" },
  { value: "military", label: "REASON_MILITARY" },
];

export const bookerTypeOptions = [
  { value: "personal", label: "BOOKER_PERSONAL" },
  { value: "business", label: "BOOKER_BUSINESS" },
  { value: "travel_management", label: "BOOKER_TRAVEL_MANAGEMENT" },
  { value: "travel_agent", label: "BOOKER_TRAVEL_AGENT" },
];

export const stayTypeOptions = [
  { value: "business", label: "STAY_BUSINESS" },
  { value: "leisure", label: "STAY_LEISURE" },
];

export const roomTypes = [
  { id: "single", label: "SINGLE_OCCUPANCY", subLabel: "SINGLE_OCCUPANCY" },
  { id: "double", label: "DOUBLE_OCCUPANCY", subLabel: "DOUBLE_OCCUPANCY" },
  { id: "twin", label: "TWIN", subLabel: "TWIN" },
];

export const checkboxOptions = [
  { id: "children", label: "TRAVELLING_WITH_CHILDREN" },
  { id: "accessible", label: "ACCESSIBLE_ROOM_NEEDED" },
];

export const hotelSearchConfig = {
  placeholder: "ENTER_A_HOTEL",
  instruction: "BOOKING_DETAILS_DESCRIPTION",
};

export const mockHotelSuggestions = [
  "Aberdeen (Airport)",
  "Aberystwyth",
  "Bath (City Centre)",
  "Belfast (Titanic Quarter)",
  "Birmingham (NEC)",
  "Brighton (Seafront)",
  "Bristol (Cabot Circus)",
  "Cambridge (Central)",
  "Cardiff (Bay)",
  "Chester",
  "Coventry",
  "Derry / Londonderry",
  "Dundee (Waterfront)",
  "Durham",
  "Eastbourne",
  "Edinburgh (Royal Mile)",
  "Exeter (St David's)",
  "Falkirk",
  "Fort William",
  "Glasgow (Central Station)",
  "Gloucester",
  "Harrogate",
  "Heathrow (Terminal 5)",
  "Hull (City Centre)",
  "Inverness",
  "Ipswich",
  "Jersey (St. Helier)",
  "Kendal (Lake District)",
  "Kingston upon Thames",
  "Leeds (City Square)",
  "Leicester",
  "Lincoln",
  "Liverpool (Albert Dock)",
  "London (King's Cross)",
  "Manchester (Piccadilly)",
  "Middlesbrough",
  "Newcastle upon Tyne",
  "Norwich",
  "Nottingham",
  "Oban",
  "Oxford",
  "Perth",
  "Plymouth",
  "Portsmouth (Historic Dockyard)",
  "Queensferry (Forth Bridges)",
  "Reading",
  "Salisbury",
  "Sheffield",
  "Southampton (Docks)",
  "Stirling",
  "Stratford-upon-Avon",
  "Swansea",
  "Torquay",
  "Ullapool",
  "Victoria (London)",
  "Warwick",
  "Winchester",
  "Wolverhampton",
  "Xpress Hub (Central London)",
  "York",
  "Zelah (Cornwall)",
];

export const dateRangeConfig = {
  placeholder: "CHECK_IN_CHECK_OUT",
  minDate: new Date("2025-06-08T14:30:00Z"),
  resetLabel: "RESET",
  doneLabel: "DONE",
};
