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
} from '../actions/person';

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
  cup: null,
};

const person = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSON:
      return {
        ...state,
        ...action.person,
      };
    case STORE_PERSON:
      return {
        ...state,
        ...action.person,
      };
    case REMOVE_PERSON:
      return {
        ...state,
        ...action.person,
      };
    case SET_CUP:
      return {
        ...state,
        cup: action.cup,
      };
    case SET_GENDER:
      return {
        ...state,
        gender: action.gender,
      };
    case SET_WEIGHT:
      return {
        ...state,
        weight: action.weightSystem.weight,
        weightType: action.weightSystem.weightType,
      };
    case SET_EXERCISE:
      return {
        ...state,
        exerciseMinutes: action.exerciseMinutes,
      };
    case SET_SLEEP:
      return {
        ...state,
        sleep: action.sleep,
      };
    case SET_WAKE:
      return {
        ...state,
        wake: action.wake,
      };
    default:
      return state;
  }
};

export default person;
