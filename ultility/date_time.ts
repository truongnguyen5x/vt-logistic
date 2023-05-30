import { format } from "date-fns";

export const formatDate = (date: number | Date) => {
  return format(date, "dd - MM - yyyy");
};
