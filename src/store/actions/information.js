import dayjs from '../../global/day';
import {
  getInterval,
  getNextNotification,
  setToStorage,
  getFromStorage,
} from '../../global/helper';

export const SET_QUITETIME = 'SET_QUITETIME';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const SET_SETUP = 'SET_SETUP';
export const FETCH_INFORMATION = 'FETCH_INFORMATION';

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

export const setNotification = () => {
  return (dispatch, getState) => {
    const { quiteTime } = getState().information;
    const { cup, dailyGoal } = getState().person;
    let intervalInMinutes = getInterval(dailyGoal, quiteTime, cup) * 60;
    let nextNotification = getNextNotification(quiteTime, intervalInMinutes);
    dispatch({
      type: SET_NOTIFICATION,
      NextNotification: nextNotification,
    });
  };
};

export const setSetupFinished = value => {
  return (dispatch, getState) => {
    try {
      let information = getState().information;
      information.isSetupFinished = value;
      setToStorage('@information', information);
      dispatch({
        type: SET_SETUP,
        isSetupFinished: value,
      });
    } catch (err) {
      console.log('Something is wrong');
    }
  };
};

export const getInformation = () => {
  return async dispatch => {
    try {
      let information = await getFromStorage('@information');
      dispatch({
        type: FETCH_INFORMATION,
        information: information,
      });
    } catch (err) {
      console.log('Something is wrong');
    }
  };
};
