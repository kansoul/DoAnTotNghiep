import { format } from "date-fns";

const dateTimeFormat = (
  date: Date,
  targetFormat: string = "yyyy/MM/dd HH:mm:ss"
) => format(date, targetFormat);

export { dateTimeFormat };
