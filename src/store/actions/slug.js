import dayjs from '../../global/day';
import { getFromStorage } from '../../global/helpers/helper';

export const ADD_RECORD = 'ADD_RECORD';
export const FETCH_SLUG = 'FETCH_SLUG';
export const DELETE_RECORD = 'DELETE_RECORD';

export const addRecord = () => {
  return (dispatch, getState) => {
    let { cup, dailyGoalType } = getState().person;
    dispatch({
      type: ADD_RECORD,
      record: {
        time: dayjs().format('hh:mm A'),
        cup: cup,
        dailyGoalType: dailyGoalType,
      },
    });
  };
};

export const fetchSlug = () => {
  return async dispatch => {
    try {
      const slug = await getFromStorage('@slug');
      dispatch({
        type: FETCH_SLUG,
        slug: slug,
      });
    } catch (err) {
      console.log('error');
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
