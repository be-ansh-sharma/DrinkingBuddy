import dayjs from 'global/day';
import {
  changeWaterSystem,
  getFromStorage,
  validateSlug,
  showFullScreenAds,
} from 'global/helpers/helper';
export const ADD_RECORD = 'ADD_RECORD';
export const FETCH_SLUG = 'FETCH_SLUG';
export const DELETE_RECORD = 'DELETE_RECORD';
export const EDIT_RECORD = 'EDIT_RECORD';
export const TRANSFORM_RECORDS = 'TRANSFORM_RECORDS';
export const REMOVE_SLUG = 'REMOVE_SLUG';
export const UPDATE_AD_COUNTER = 'UPDATE_AD_COUNTER';
export const RESET_AD_COUNTER = 'RESET_AD_COUNTER';

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

export const removeSlug = () => {
  return {
    type: REMOVE_SLUG,
  };
};

export const transformRecords = metric => {
  return (dispatch, getState) => {
    let records = getState().slug.records;
    records = records.map(record => {
      let transformedValue = changeWaterSystem(record.cup, metric);
      if (transformedValue && transformedValue !== 0) {
        return {
          ...record,
          cup: changeWaterSystem(record.cup, metric),
          dailyGoalType: metric === 'Kg' ? 'ml' : 'oz.',
        };
      }
      return record;
    });

    dispatch({
      type: TRANSFORM_RECORDS,
      records,
    });
  };
};

export const validateAdCounter = () => {
  return async (dispatch, getState) => {
    const { adsThreshold, currentAdCounter } = getState().slug;
    const { personalizedAds } = getState().information;
    if (currentAdCounter + 1 >= adsThreshold) {
      showFullScreenAds(personalizedAds);
      dispatch({
        type: RESET_AD_COUNTER,
      });
    } else {
      dispatch({
        type: UPDATE_AD_COUNTER,
      });
    }
  };
};
