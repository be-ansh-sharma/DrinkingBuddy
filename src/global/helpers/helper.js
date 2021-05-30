import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from '../day';
import {
  fetchDBNotifications,
  syncNotifications,
} from '../database/Database.helper';

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
      let startTime = dayjs().hour(start.hour).minute(start.minute).second(0);
      let endTime = dayjs().hour(end.hour).minute(end.minute).second(0);

      if (start.hour > 12 && end.hour < 12) {
        startTime = startTime.subtract(1, 'day');
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
  let todayNotifications = getTodayNotification(quiteTimes, minutes);
  let nextNotification = '';

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
    syncNotifications(todayNotifications);
    return {
      notifications: todayNotifications,
      nextNotification,
      today: dayjs().toDate(),
    };
  }

  syncNotifications(todayNotifications);
  return {
    notifications: todayNotifications,
    nextNotification,
    today: dayjs().toDate(),
  };
};

export const validateInformation = information => {
  const { today } = information;
  if (dayjs().get('day') !== dayjs(today).get('day')) {
    return {
      ...information,
      today: dayjs().toDate(),
      nextNotification: '',
      notifications: [],
      notificationToken: '',
      completed: 0,
    };
  }

  return information;
};

export const validateSlug = slug => {
  const { today } = slug;
  if (dayjs().get('day') !== dayjs(today).get('day')) {
    return {
      ...slug,
      today: dayjs().toDate(),
      hasCompleted: false,
      records: [],
    };
  }

  return slug;
};
