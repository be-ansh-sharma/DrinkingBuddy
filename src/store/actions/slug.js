import dayjs from '../../global/day';

export const ADD_RECORD = 'ADD_RECORD';

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
