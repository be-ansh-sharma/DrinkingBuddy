import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'global/day';
import {
  fetchDBNotifications,
  syncNotifications,
} from 'global/database/Database.helper';

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

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
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

export const getTodayNotification = (
  quiteTimes,
  minutes,
  current = dayjs().hour(0).minute(0).second(0),
) => {
  let notifications = [];
  let endDate = current.add(1, 'day').hour(0).minute(0).second(0);
  while (current.isBefore(endDate)) {
    current = current.add(minutes, 'minute');
    let hasConflict = false;

    for (const key in quiteTimes) {
      let time = quiteTimes[key];
      let start = time.start;
      let end = time.end;
      let startTime = current.hour(start.hour).minute(start.minute).second(0);
      let endTime = current.hour(end.hour).minute(end.minute).second(0);

      if (start.hour > end.hour) {
        let previousDayStartTiem = startTime.subtract(1, 'day');
        hasConflict =
          current.isBetween(previousDayStartTiem, endTime) ||
          current.isBetween(
            startTime,
            current.add(1, 'day').hour(0).minute(0).second(0),
          );
        if (hasConflict) {
          break;
        }
        continue;
      }

      hasConflict = current.isBetween(startTime, endTime);

      if (hasConflict) {
        break;
      }
    }

    if (!hasConflict && current.isBefore(endDate)) {
      notifications.push(current.toDate());
    }
  }

  return notifications;
};

export const getAllNotifications = (quiteTimes, minutes) => {
  let current = dayjs();
  let today = current.hour(0).minute(0).second(0);
  let todayNotifications = getTodayNotification(quiteTimes, minutes);
  let nextNotification;

  for (let index = 0; index < todayNotifications.length; index++) {
    const notification = dayjs(todayNotifications[index]);
    if (notification && notification.isAfter(current)) {
      nextNotification = notification.toDate();
      break;
    }
  }

  if (!nextNotification) {
    todayNotifications = getTodayNotification(
      quiteTimes,
      minutes,
      current.add(1, 'day').hour(0).minute(0).second(0),
    );
    nextNotification = todayNotifications[0];
    //syncNotifications(todayNotifications);
    return {
      notifications: todayNotifications,
      nextNotification,
      today: dayjs().toDate(),
    };
  }

  //syncNotifications(todayNotifications);
  return {
    notifications: todayNotifications,
    nextNotification,
    today: today.toDate(),
  };
};

export const validateInformation = information => {
  if (information) {
    const { today } = information;
    if (dayjs().get('day') !== dayjs(today).get('day')) {
      return {
        ...information,
        today: dayjs().toDate(),
        nextNotification: '',
        notifications: [],
        goalCompleted: false,
        completed: 0,
      };
    }
    return information;
  }

  return {
    today: dayjs().toDate(),
  };
};

export const validateSlug = slug => {
  if (slug) {
    const { today } = slug;
    if (dayjs().get('day') !== dayjs(today).get('day')) {
      return {
        ...slug,
        today: dayjs().toDate(),
        records: [],
      };
    }
    return slug;
  }

  return {
    today: dayjs().toDate(),
  };
};
