export const formatTotalRoomsText = (
  totalRoomsText: string,
  totalRooms: number
): string => {
  return totalRoomsText.replace("0", totalRooms.toString());
};
