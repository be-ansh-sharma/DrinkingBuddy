import {
  SET_QUITETIME,
  SET_NOTIFICATIONS,
  SET_SETUP,
  FETCH_INFORMATION,
} from '../actions/information';

const initialState = {
  quiteTime: {
    0: {
      start: {
        hour: 23,
        minute: 0,
      },
      end: {
        hour: 6,
        minute: 0,
      },
      diff: 7,
    },
  },
  nextNotification: '',
  notifications: [],
  completed: 0,
  isSetupFinished: false,
};

const information = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUITETIME:
      return {
        ...state,
        quiteTime: {
          ...state.quiteTime,
          ...action.time,
        },
      };
    case SET_NOTIFICATIONS:
      return {
        ...state,
        ...action.notifications,
      };
    case SET_SETUP:
      return {
        ...state,
        isSetupFinished: action.isSetupFinished,
      };
    case FETCH_INFORMATION:
      return {
        ...state,
        ...action.information,
      };
    default:
      return state;
  }
};

export default information;
