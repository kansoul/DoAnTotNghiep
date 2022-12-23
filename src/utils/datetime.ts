import { format } from "date-fns";

const dateTimeFormat = (
  date: Date,
  targetFormat: string = "yyyy/MM/dd HH:mm:ss"
) => format(date, targetFormat);

const dateTimeFormatVietNam = (
  date: Date,
  targetFormat: string = "yyyy-MM-dd"
) => format(date, targetFormat);

const dateTimeDateSpending = (
  date: Date,
  targetFormat: string = "dd/MM/yyyy"
) => format(date, targetFormat);

const dateTimeFormatTime = (date: Date, targetFormat: string = "HH:mm") =>
  format(date, targetFormat);

const dateTimeFormatMonth = (date: string) => {
  let month = date.substring(5, 7);
  return parseInt(month, 10);
};
const dateTimeFormatDay = (date: string) => {
  let day = date.substring(8, 10);
  return parseInt(day, 10);
};
const dateTimeFormatYear = (date: string) => {
  let year = date.substring(0, 4);
  return parseInt(year, 10);
};

export {
  dateTimeFormat,
  dateTimeFormatVietNam,
  dateTimeFormatTime,
  dateTimeFormatMonth,
  dateTimeFormatDay,
  dateTimeDateSpending,
  dateTimeFormatYear,
};
