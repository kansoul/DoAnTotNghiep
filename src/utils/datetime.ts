import { format } from "date-fns";

const dateTimeFormat = (
  date: Date,
  targetFormat: string = "yyyy/MM/dd HH:mm:ss"
) => format(date, targetFormat);

const dateTimeFormatVietNam = (
  date: Date,
  targetFormat: string = "dd/MM/yyyy"
) => format(date, targetFormat);

export { dateTimeFormat, dateTimeFormatVietNam };
