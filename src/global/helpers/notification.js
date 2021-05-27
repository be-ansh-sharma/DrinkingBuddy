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

  let trigger = new Date(nextNotification);

  console.log(nextNotification);

  let token = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'It is time to drink water',
      body: 'Tap here to confirm',
    },
    trigger,
  });

  console.log('token is ' + token);
  return token;
};

export const checkAndScheduleNotification = async (
  notifications,
  notificationToken,
) => {
  let { nextNotification } = notifications;
  let scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
  if (scheduledNotifications.length > 1) {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }

  if (!scheduledNotifications.length) {
    return await registerForLocalNotificationsAsync(nextNotification);
  }

  console.log(scheduledNotifications);
  let { identifier } = scheduledNotifications;
  if (identifier === notificationToken) {
    return identifier;
  } else if (scheduledNotifications.length) {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }

  return await registerForLocalNotificationsAsync(nextNotification);
};
