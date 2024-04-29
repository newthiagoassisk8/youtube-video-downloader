import moment from "moment";
import "moment/locale/pt-br";

export function getCurrentTime() {
  return `${moment().format("HH")}:${moment().format("mm")}`;
}

export function getTodayDateFromFormat(format: "DD/MM/YYYY" | "DD/MM/YY") {
  return moment().format(format);
}

export function changeDateFormatTo(date: string, format: string) {
  return moment(date, "DD/MM/YYYY").format("DD.MM.YY");
}
