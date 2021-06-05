import dayjs from '../day';
import * as Notifications from 'expo-notifications';

export const registerForLocalNotificationsAsync = async nextNotification => {
  const { existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    return;
  }

  let trigger = dayjs(nextNotification).toDate();

  let token = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'It is time to drink water',
      body: 'Tap here to confirm',
    },
    trigger,
  });

  return token;
};

export const checkAndScheduleNotification = async notifications => {
  let scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();

  let timeList = [];

  scheduledNotifications.forEach(({ trigger }) => {
    timeList.push(dayjs(trigger.value).format());
  });

  notifications.forEach(notification => {
    if (
      dayjs(notification).isAfter(dayjs()) &&
      !timeList.includes(dayjs(notification).format())
    ) {
      registerForLocalNotificationsAsync(notification);
    }
  });
};

export const removeAllNotification = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};
