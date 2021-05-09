import {
  FETCH_PERSON,
  STORE_PERSON,
  REMOVE_PERSON,
  SET_CUP,
  SET_GENDER,
} from '../actions/person';

const initialState = {
  gender: '',
  weight: 0,
  weightType: 'metric',
  exerciseMinutes: 0,
  dailyGoal: 0,
  dailyGoalType: 'ml',
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
    default:
      return state;
  }
};

export default person;
