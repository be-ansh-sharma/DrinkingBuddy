import Person from 'models/Person';
import { getFromStorage, changeMetric } from 'global/helpers/helper';

export const FETCH_PERSON = 'FETCH_PERSON';
export const STORE_PERSON = 'STORE_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';
export const UPDATE_METRIC = 'UPDATE_METRIC';
export const SET_CUP = 'SET_CUP';
export const SET_GENDER = 'SET_GENDER';
export const SET_WEIGHT = 'SET_WEIGHT';
export const SET_EXERCISE = 'SET_EXERCISE';
export const SET_SLEEP = 'SET_SLEEP';
export const SET_WAKE = 'SET_WAKE';

export const fetchPerson = () => {
  return async dispatch => {
    try {
      const storedPerson = await getFromStorage('@person');
      if (storedPerson) {
        dispatch({
          type: FETCH_PERSON,
          person: storedPerson,
        });
      }
    } catch (err) {
      console.log('There is an error!!!');
    }
  };
};

export const storePerson = (gender, weight, weightType, exerciseMinutes) => {
  return async dispatch => {
    try {
      const person = new Person(gender, weight, weightType, exerciseMinutes);
      dispatch({
        type: STORE_PERSON,
        person: person,
      });
    } catch (err) {
      console.log('There is an error!!!');
    }
  };
};

export const removePerson = () => {
  return {
    type: REMOVE_PERSON,
  };
};

export const setCup = cup => {
  return {
    type: SET_CUP,
    cup: cup,
  };
};

export const setGender = gender => {
  return {
    type: SET_GENDER,
    gender: gender,
  };
};

export const setWeight = weightSystem => {
  return {
    type: SET_WEIGHT,
    weightSystem: weightSystem,
  };
};

export const setExercise = minutes => {
  return {
    type: SET_EXERCISE,
    exerciseMinutes: minutes,
  };
};

export const setSleep = sleep => {
  return {
    type: SET_SLEEP,
    sleep: sleep,
  };
};

export const setWake = wake => {
  return {
    type: SET_WAKE,
    wake: wake,
  };
};

export const updatePerson = (key, updatedValue) => {
  return (dispatch, getState) => {
    const { gender, weight, weightType, exerciseMinutes } = getState().person;
    let person;
    switch (key) {
      case 'weight':
        person = new Person(gender, updatedValue, weightType, exerciseMinutes);
        break;
      case 'exercise':
        person = new Person(gender, weight, weightType, updatedValue);
        break;
      default:
        person = new Person(gender, weight, weightType, exerciseMinutes);
    }

    dispatch({
      type: UPDATE_PERSON,
      person,
    });
  };
};

export const updateMetric = metric => {
  return (dispatch, getState) => {
    const { gender, weight, weightType, exerciseMinutes } = getState().person;
    const newWeight = changeMetric(weight, metric);
  };
};

