import {
  FETCH_PERSON,
  STORE_PERSON,
  REMOVE_PERSON,
  SET_CUP,
  SET_GENDER,
  SET_WEIGHT,
  SET_EXERCISE,
  SET_SLEEP,
  SET_WAKE,
  UPDATE_PERSON,
  UPDATE_METRIC,
} from 'store/actions/person';
import { setToStorage } from 'global/helpers/helper';
import { syncPerson } from 'global/database/Database.helper';

const initialState = {
  gender: '',
  weight: 70,
  weightType: 'Kg',
  exerciseMinutes: 60,
  dailyGoal: 0,
  dailyGoalType: 'ml',
  sleep: {
    hour: 23,
    minute: 0,
  },
  wake: {
    hour: 6,
    minute: 0,
  },
  cup: 250,
};

const person = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSON:
      state = {
        ...state,
        ...action.person,
      };
      break;
    case STORE_PERSON:
      state = {
        ...state,
        ...action.person,
      };
      break;
    case REMOVE_PERSON:
      state = initialState;
      break;
    case SET_CUP:
      state = {
        ...state,
        cup: action.cup,
      };
      break;
    case SET_GENDER:
      state = {
        ...state,
        gender: action.gender,
      };
      break;
    case SET_WEIGHT:
      let cup;
      if (action.weightSystem.weightType !== state.weightType) {
        if (action.weightSystem.weightType === 'lbs') {
          cup = state.cup * 29.5;
        } else {
          cup = state.cup / 29.5;
        }
      } else {
        cup = state.cup;
      }
      state = {
        ...state,
        weight: action.weightSystem.weight,
        weightType: action.weightSystem.weightType,
        cup: cup,
      };
      break;
    case SET_EXERCISE:
      state = {
        ...state,
        exerciseMinutes: action.exerciseMinutes,
      };
      break;
    case SET_SLEEP:
      state = {
        ...state,
        sleep: action.sleep,
      };
      break;
    case SET_WAKE:
      state = {
        ...state,
        wake: action.wake,
      };
      break;
    case UPDATE_PERSON:
    case UPDATE_METRIC:
      state = {
        ...state,
        ...action.person,
      };
      break;
    default:
      return state;
  }

  setToStorage('@person', state);
  syncPerson(state);
  return state;
};

export default person;
