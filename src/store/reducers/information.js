import {
  SET_QUITETIME,
  SET_NOTIFICATIONS,
  SET_SETUP,
  FETCH_INFORMATION,
  SET_COMPLETED,
} from '../actions/information';
import { DELETE_RECORD } from '../actions/slug';
import { setToStorage } from '../../global/helpers/helper';

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
  notificationToken: '',
  completed: 0,
  today: '',
  isSetupFinished: false,
};

const information = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUITETIME:
      state = {
        ...state,
        quiteTime: {
          ...state.quiteTime,
          ...action.time,
        },
      };
      break;
    case SET_NOTIFICATIONS:
      state = {
        ...state,
        ...action.notifications,
      };
      break;
    case SET_SETUP:
      state = {
        ...state,
        isSetupFinished: action.isSetupFinished,
        notificationToken: action.notificationToken,
      };
      break;
    case FETCH_INFORMATION:
      state = {
        ...state,
        ...action.information,
      };
      break;
    case SET_COMPLETED:
      state = {
        ...state,
        completed: action.completed,
      };
      break;
    case DELETE_RECORD:
      state = {
        ...state,
        completed: state.completed - action.cup,
      };
      break;
    default:
      return state;
  }

  setToStorage('@information', state);
  return state;
};

export default information;
