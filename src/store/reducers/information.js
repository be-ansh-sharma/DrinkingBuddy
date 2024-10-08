import {
  SET_QUITETIME,
  SET_NOTIFICATIONS,
  SET_SETUP,
  FETCH_INFORMATION,
  SET_COMPLETED,
  SET_DARKMODE,
  REMOVE_INFORMATION,
  SET_CHANNEL_ID,
  SET_NOTICE,
  SET_NOTIFICATION_TOKEN,
  UPDATE_CONSENT,
  UPDATE_ADS_PERSONALIZATIONS,
} from 'store/actions/information';
import { UPDATE_METRIC } from 'store/actions/person';
import { DELETE_RECORD, EDIT_RECORD } from 'store/actions/slug';
import { setToStorage } from 'global/helpers/helper';
import { syncInformation } from 'global/database/Database.helper';

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
  goalCompleted: false,
  completed: 0,
  notificationChannelID: 'default',
  notificationToken: '',
  noticeShown: false,
  intervalInMinutes: 0,
  today: '',
  isSetupFinished: null,
  darkMode: false,
  consentProvided: false,
  personalizedAds: true,
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
        intervalInMinutes: action.intervalInMinutes,
      };
      break;
    case SET_SETUP:
      state = {
        ...state,
        isSetupFinished: action.isSetupFinished,
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
        goalCompleted: action.goalCompleted,
      };
      break;
    case DELETE_RECORD:
      if (state.completed - action.cup < 0) {
        break;
      }
      state = {
        ...state,
        completed: state.completed - action.cup,
      };
      break;
    case EDIT_RECORD:
      state = {
        ...state,
        completed: action.completed,
      };
      break;
    case SET_DARKMODE:
      state = {
        ...state,
        darkMode: action.darkMode,
      };
      break;
    case REMOVE_INFORMATION:
      state = initialState;
      state.isSetupFinished = false;
      break;
    case UPDATE_METRIC:
      state = {
        ...state,
        completed: action.completed,
      };
      break;
    case SET_CHANNEL_ID:
      state = {
        ...state,
        notificationChannelID: action.notificationChannelID,
      };
      break;
    case SET_NOTICE:
      state = {
        ...state,
        noticeShown: true,
      };
      break;
    case SET_NOTIFICATION_TOKEN:
      state = {
        ...state,
        notificationToken: action.notificationToken,
      };
      break;
    case UPDATE_ADS_PERSONALIZATIONS:
      state = {
        ...state,
        personalizedAds: action.personalizedAds,
      };
      break;
    case UPDATE_CONSENT:
      state = {
        ...state,
        consentProvided: true,
      };
      break;
    default:
      return state;
  }

  setToStorage('@information', state);
  syncInformation(state);
  return state;
};

export default information;
