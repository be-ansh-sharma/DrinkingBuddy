import dayjs from '../../global/day';

export const SET_QUITETIME = 'SET_QUITETIME';

export const setQuiteTime = time => {
  let key = Object.keys(time)[0];
  let start = time[key].start;
  let end = time[key].end;
  let startTime = dayjs().hour(start.hour).minute(start.minute).second(0);
  let endTime = dayjs().hour(end.hour).minute(end.minute).second(0);

  if (start.hour > 12 && end.hour < 12) {
    endTime = endTime.add(1, 'day');
  }

  let timeObj = {
    [key]: {
      start,
      end,
      diff: endTime.diff(startTime, 'hour'),
    },
  };
  return {
    time: timeObj,
    type: SET_QUITETIME,
  };
};
