import Person from '../../models/Person';
import { setToStorage, getFromStorage } from '../../global/helper';

export const FETCH_PERSON = 'FETCH_PERSON';
export const STORE_PERSON = 'STORE_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';
export const SET_CUP = 'SET_CUP';
export const SET_GENDER = 'SET_GENDER';

export const fetchPerson = () => {
  return async dispatch => {
    try {
      const storedPerson = await getFromStorage('@person');
      if (storedPerson) {
        dispatch({
          type: FETCH_PERSON,
          person: storedPerson,
        });
      } else {
        dispatch({
          type: FETCH_PERSON,
          person: new Person('', 0, 'metric', 0),
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
      await setToStorage('@person', person);
      dispatch({
        type: FETCH_PERSON,
        person: person,
      });
    } catch (err) {
      console.log('There is an error!!!');
    }
  };
};

export const removePerson = () => {
  return async dispatch => {
    try {
      const person = new Person('', 0, 'metric', 0);
      await setToStorage('@person', person);
      dispatch({
        type: REMOVE_PERSON,
        person: person,
      });
    } catch (err) {
      console.log('There is an error!!!');
    }
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
