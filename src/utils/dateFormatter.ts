import { DateTime } from "luxon";

const dateFormatter = async (startMonth: string, endMonth: string) => {
  let splitedStartMonth = startMonth.split("/");
  let splitedEndMonth = endMonth.split("/");

  const startDate = {
    startYear: Number(splitedStartMonth[0]),
    startMonth: Number(splitedStartMonth[1]),
    startDay: 1,
    startHour: 0,
    startMinute: 0,
    startSecond: 0
  };

  let endDay = 31;

  if (splitedEndMonth.includes("04") || splitedEndMonth.includes("06") || splitedEndMonth.includes("09") || splitedEndMonth.includes("11")) {
    endDay = 30
  } else if (splitedEndMonth.includes("02")) {
    endDay = 28
  };

  const endDate = {
    endYear: Number(splitedEndMonth[0]),
    endMonth: Number(splitedEndMonth[1]),
    endDay: endDay,
    endHour: 23,
    endMinute: 59,
    endSecond: 59
  };

  const formattedStartDate = DateTime.utc(
    startDate.startYear, 
    startDate.startMonth, 
    startDate.startDay, 
    startDate.startHour, 
    startDate.startMinute, 
    startDate.startSecond
  ).toISO();

  const formattedEndDate = DateTime.utc(
    endDate.endYear, 
    endDate.endMonth, 
    endDate.endDay, 
    endDate.endHour, 
    endDate.endMinute, 
    endDate.endSecond
  ).toISO();

  return {
    formattedStartDate,
    formattedEndDate
  };
};

export default dateFormatter;