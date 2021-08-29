import dayjs from 'global/day';
import {
  getInterval,
  getAllNotifications,
  getFromStorage,
  validateInformation,
} from 'global/helpers/helper';
import { syncInformation } from 'global/database/Database.helper';
import {
  checkAndScheduleNotification,
  removeAllNotification,
} from 'global/helpers/notification';

export const SET_QUITETIME = 'SET_QUITETIME';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATION';
export const SET_SETUP = 'SET_SETUP';
export const FETCH_INFORMATION = 'FETCH_INFORMATION';
export const REMOVE_INFORMATION = 'REMOVE_INFORMATION';
export const SET_COMPLETED = 'SET_COMPLETED';
export const SET_DARKMODE = 'SET_DARKMODE';
export const SET_NOTICE = 'SET_NOTICE';
export const SET_CHANNEL_ID = 'SET_CHANNEL_ID';
export const SET_NOTIFICATION_TOKEN = 'SET_NOTIFICATION_TOKEN';
export const UPDATE_CONSENT = 'UPDATE_CONSENT';
export const UPDATE_ADS_PERSONALIZATIONS = 'UPDATE_ADS_PERSONALIZATIONS';

export const setQuiteTime = time => {
  let key = Object.keys(time)[0];
  let start = time[key].start;
  let end = time[key].end;
  let startTime = dayjs()
    .hour(start.hour)
    .minute(start.minute)
    .second(0)
    .millisecond(0);
  let endTime = dayjs()
    .hour(end.hour)
    .minute(end.minute)
    .second(0)
    .millisecond(0);

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

export const setNotifications = () => {
  return async (dispatch, getState) => {
    try {
      const {
        quiteTime,
        notificationChannelID,
        intervalInMinutes,
      } = getState().information;
      const { cup, dailyGoal } = getState().person;
      let currentIntervalInMinutes =
        getInterval(dailyGoal, quiteTime, cup) * 60;
      if (intervalInMinutes !== currentIntervalInMinutes) {
        await removeAllNotification();
      }
      let notifications = getAllNotifications(
        quiteTime,
        currentIntervalInMinutes,
      );
      checkAndScheduleNotification(
        notifications.notifications,
        notificationChannelID,
      );
      dispatch({
        type: SET_NOTIFICATIONS,
        notifications,
        intervalInMinutes: currentIntervalInMinutes,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setSetupFinished = value => {
  return (dispatch, getState) => {
    try {
      let information = getState().information;
      let person = getState().person;
      syncInformation(information, person);
      dispatch({
        type: SET_SETUP,
        isSetupFinished: value,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getInformation = () => {
  return async dispatch => {
    try {
      let information = await getFromStorage('@information');
      information = validateInformation(information);
      dispatch({
        type: FETCH_INFORMATION,
        information: information,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setCompleted = customCup => {
  return (dispatch, getState) => {
    let { completed, goalCompleted } = getState().information;
    let { cup, dailyGoal } = getState().person;
    cup = customCup || customCup >= 0 ? customCup : cup;
    let newCompleted = completed + cup;

    if (completed >= dailyGoal) {
      goalCompleted = 'completed';
    } else if (newCompleted >= dailyGoal && goalCompleted !== 'completed') {
      goalCompleted = 'ready';
    }

    dispatch({
      type: SET_COMPLETED,
      completed: completed + cup,
      goalCompleted: goalCompleted,
    });
  };
};

export const setDarkMode = mode => {
  return {
    type: SET_DARKMODE,
    darkMode: mode,
  };
};

export const setChannelID = id => {
  return {
    type: SET_CHANNEL_ID,
    notificationChannelID: id,
  };
};

export const setNotice = () => {
  return {
    type: SET_NOTICE,
  };
};

export const setNotificationToken = token => {
  return {
    type: SET_NOTIFICATION_TOKEN,
    notificationToken: token,
  };
};

export const removeInformation = () => {
  return {
    type: REMOVE_INFORMATION,
  };
};

export const updatePersonlization = personalizedAds => {
  return {
    type: UPDATE_ADS_PERSONALIZATIONS,
    personalizedAds,
  };
};

export const updateConsent = () => {
  return {
    type: UPDATE_CONSENT,
  };
};
