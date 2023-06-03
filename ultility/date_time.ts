import { format } from "date-fns";

export const formatDate = (date: number | Date) => {
  return format(date, "dd - MM - yyyy");
};

export const formatDate2 = (date: number | Date) => {
  return format(date, "dd/MM/yyyy");
};
