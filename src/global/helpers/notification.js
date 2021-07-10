import dayjs from 'global/day';
import * as Notifications from 'expo-notifications';
import { COLOR } from 'global/styles';

export const registerForLocalNotificationsAsync = async (
  nextNotification,
  notificationChannelID,
) => {
  try {
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
      trigger: { date: trigger, channelId: notificationChannelID },
    });

    return token;
  } catch (err) {
    await removeAllNotification();
    console.log(err);
  }
};

export const checkAndScheduleNotification = async (
  notifications,
  notificationChannelID,
) => {
  try {
    await configureNotification();
    await setupChannels();
    let scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();

    let timeList = [];

    scheduledNotifications.forEach(({ trigger }) => {
      timeList.push(dayjs(trigger.value).format());
    });

    await notifications.forEach(async notification => {
      if (
        dayjs(notification).isAfter(dayjs()) &&
        !timeList.includes(dayjs(notification).format())
      ) {
        await registerForLocalNotificationsAsync(
          notification,
          notificationChannelID,
        );
      }
    });
  } catch (err) {
    await removeAllNotification();
    console.log(err);
  }
};

export const removeAllNotification = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};

const configureNotification = async () => {
  await Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      };
    },
  });
};

const setupChannels = async () => {
  try {
    // default channel - everything is enabled
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      enableVibrate: true,
      importance: Notifications.AndroidImportance.MAX,
      priority: 'max',
      vibrationPattern: [0, 250, 250, 250],
      description: 'Default channel for the App',
      enableLights: true,
      lightColor: COLOR.primary,
    });

    // vibrate only channel
    Notifications.setNotificationChannelAsync('vibrate', {
      name: 'vibrate',
      enableVibrate: true,
      importance: Notifications.AndroidImportance.MAX,
      priority: 'max',
      vibrationPattern: [0, 250, 250, 250],
      description: 'Vibrate only channel for the App',
      enableLights: true,
      sound: false,
      lightColor: COLOR.primary,
    });

    // No Vibrate, No sound - only display
    Notifications.setNotificationChannelAsync('silent', {
      name: 'silent',
      enableVibrate: false,
      importance: Notifications.AndroidImportance.MAX,
      priority: 'max',
      description: 'silent channel for the App',
      enableLights: true,
      sound: false,
      lightColor: COLOR.primary,
    });

    // sound only channle, no vibration
    Notifications.setNotificationChannelAsync('sound', {
      name: 'sound',
      enableVibrate: false,
      importance: Notifications.AndroidImportance.MAX,
      priority: 'max',
      description: 'Sound only channel for the App',
      enableLights: true,
      lightColor: COLOR.primary,
    });
  } catch (err) {
    console.log(err);
  }
};
