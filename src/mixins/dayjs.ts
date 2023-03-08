import dayjs, { type Dayjs } from "@/plugins/dayjs";
export const getDate = () => {
  const getDateByTimestamp = (timestamp: string, type = "YYYY/MM/DD") => {
    return dayjs(timestamp).format(type);
  };

  const getDateObjectByTimestamp = (timestamp: string, type = "YYYY/MM/DD") => {
    return dayjs(getDateByTimestamp(timestamp, type));
  };

  const getTimestampByDate = (date: string | number | Dayjs) => {
    return dayjs(dayjs(date).format());
  };
  return {
    getDateByTimestamp,
    getTimestampByDate,
    getDateObjectByTimestamp,
  };
};

// getDateByTimestamp(timestamp: string, type = "YYYY/MM/DD") nhận vào một chuỗi thời gian timestamp và định dạng type (mặc định là "YYYY/MM/DD")
// và trả về chuỗi thời gian định dạng theo type.

// getDateObjectByTimestamp(timestamp: string, type = "YYYY/MM/DD") nhận vào một chuỗi thời gian timestamp và định dạng type (mặc định là "YYYY/MM/DD")
// và trả về một đối tượng Day.js của thời gian tương ứng.

// getTimestampByDate(date: string | number | Dayjs) nhận vào một tham số date có thể là chuỗi thời gian, số hoặc đối tượng Day.js
// và trả về một đối tượng Day.js tương ứng với thời gian được định dạng lại.
