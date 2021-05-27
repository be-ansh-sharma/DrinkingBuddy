import dayjs from '../../global/day';
import {
  getInterval,
  getAllNotifications,
  getFromStorage,
  validateInformation,
} from '../../global/helpers/helper';
import { syncInformation } from '../../global/database/Database.helper';
import { checkAndScheduleNotification } from '../../global/helpers/notification';

export const SET_QUITETIME = 'SET_QUITETIME';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATION';
export const SET_SETUP = 'SET_SETUP';
export const FETCH_INFORMATION = 'FETCH_INFORMATION';
export const SET_COMPLETED = 'SET_COMPLETED';

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

export const setNotifications = () => {
  return async (dispatch, getState) => {
    try {
      const { quiteTime, notificationToken } = getState().information;
      const { cup, dailyGoal } = getState().person;
      let intervalInMinutes = getInterval(dailyGoal, quiteTime, cup) * 60;
      let notifications = getAllNotifications(quiteTime, intervalInMinutes);
      let currentToken = await checkAndScheduleNotification(
        notifications,
        notificationToken,
      );
      dispatch({
        type: SET_NOTIFICATIONS,
        notifications,
        notificationToken: currentToken,
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

export const setCompleted = () => {
  return (dispatch, getState) => {
    let { completed } = getState().information;
    let { cup } = getState().person;
    dispatch({
      type: SET_COMPLETED,
      completed: completed + cup,
    });
  };
};
