import { formatInTimeZone as formatDate } from "date-fns-tz";

export const getHeaderColor = ({
  heartbeats,
  rangeMaxAll,
  alarmOn,
  schedule,
}) => {
  const theme = {
    offline: "#777586",
    inRange: "#387F3C",
    maxRange: "#B00020",
    minRange: "#1976D2",
    alarm: "#F57C00",
  };

  console.log("schedule background color..", schedule);

  // if (!isOnSchedule(schedule)) {
  //   return theme.offline;
  // }

  if (pcIsOutOfRange(heartbeats, rangeMaxAll)) {
    return theme.maxRange;
  }

  if (alarmOn) {
    return theme.alarm;
  }

  return theme.inRange;
};

export const pcIsOutOfRange = (heartbeats, rangeMaxAll) =>
  ["channel1", "channel2", "channel3", "channel4"]
    .map((key) => heartbeats[key] > rangeMaxAll[key])
    .includes(true);

export const getChannelsOutOfRange = (heartbeats, rangeMaxAll) =>
  ["channel1", "channel2", "channel3", "channel4"].map((key) => ({
    channel: key,
    value: heartbeats[key],
    maxRange: rangeMaxAll[key],
    outOfRange: heartbeats[key] > rangeMaxAll[key],
  }));

export const getChannelColor = (theme, outOfRange) =>
  outOfRange ? theme.palette.sensors.maxRange : theme.palette.black;

const isBetweenSchedule = (nowTime, scheduleType) => {
  const weekdaySchedule = scheduleType.S.split("-");
  console.log("data in weekdaySchedule;", weekdaySchedule);
  const initTime = weekdaySchedule[0];
  const endTime = weekdaySchedule[1];
  if (nowTime >= initTime && nowTime <= endTime) {
    return true;
  }
};

export const isOnSchedule = (schedule) => {
  if (schedule) {
    const now = formatDate(new Date(), schedule.timezone.S, "i-HH:mm").split(
      "-"
    );
    const nowWeekDay = now[0];
    const nowTime = now[1];
    console.log("schedule ==>", schedule);
    if (nowWeekDay >= 1 && nowWeekDay < 6 && schedule.weekday.S !== "off") {
      return isBetweenSchedule(nowTime, schedule.weekday);
    }

    if (nowWeekDay === "6" && schedule.saturday.S !== "off") {
      return isBetweenSchedule(nowTime, schedule.saturday);
    }

    if (nowWeekDay === "7" && schedule.sunday.S !== "off") {
      return isBetweenSchedule(nowTime, schedule.sunday);
    }
  }

  return false;
};
