import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from './day';

export const getFromStorage = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result != null ? JSON.parse(result) : null;
  } catch (err) {
    throw err;
  }
};

export const setToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw err;
  }
};

export const changeMetric = (value, system) => {
  if (system === 'Kg') {
    return Math.ceil(+value / 2.205);
  } else {
    return Math.floor(+value * 2.205);
  }
};

export const getInterval = (dailyGoal, quiteTimes, cup) => {
  let totalQuiteTime = 0;
  Object.keys(quiteTimes).map(key => (totalQuiteTime += quiteTimes[key].diff));
  return +((27 - totalQuiteTime) / (dailyGoal / cup)).toFixed(1);
};

export const getNextNotification = (quiteTimes, minutes) => {
  let current = dayjs();
  while (current.isBefore(dayjs().add(1, 'day'))) {
    current = current.add(minutes, 'minute');
    let hasConflict = false;

    for (const key in quiteTimes) {
      let time = quiteTimes[key];
      let start = time.start;
      let end = time.end;
      let startTime = dayjs().hour(start.hour).minute(start.minute).second(0);
      let endTime = dayjs().hour(end.hour).minute(end.minute).second(0);

      if (start.hour > 12 && end.hour < 12) {
        endTime = endTime.add(1, 'day');
      }

      hasConflict = current.isBetween(startTime, endTime);

      if (hasConflict) {
        break;
      }
    }

    if (!hasConflict) {
      break;
    }
  }

  return current.toDate();
};
