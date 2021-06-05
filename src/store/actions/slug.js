import dayjs from 'global/day';
import { getFromStorage, validateSlug } from 'global/helpers/helper';

export const ADD_RECORD = 'ADD_RECORD';
export const FETCH_SLUG = 'FETCH_SLUG';
export const DELETE_RECORD = 'DELETE_RECORD';
export const EDIT_RECORD = 'EDIT_RECORD';

export const addRecord = (customTime, customCup) => {
  return (dispatch, getState) => {
    let { cup, dailyGoalType } = getState().person;
    let time = dayjs().format('hh:mm A');
    if (customTime && customCup) {
      time = dayjs(customTime).format('hh:mm A');
      cup = customCup;
    }
    dispatch({
      type: ADD_RECORD,
      record: {
        time: time,
        cup: cup,
        dailyGoalType: dailyGoalType,
      },
    });
  };
};

export const fetchSlug = () => {
  return async dispatch => {
    try {
      let slug = await getFromStorage('@slug');
      slug = validateSlug(slug);
      dispatch({
        type: FETCH_SLUG,
        slug: slug,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteRecord = (index, cup) => {
  return {
    type: DELETE_RECORD,
    index,
    cup,
  };
};

export const editRecord = (index, cup, newCup) => {
  return (dispatch, getState) => {
    let { completed } = getState().information;
    dispatch({
      type: EDIT_RECORD,
      index,
      cup: newCup,
      completed: completed - cup + newCup,
    });
  };
};
