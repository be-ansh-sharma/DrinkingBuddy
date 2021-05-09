export const SET_QUITETIME = 'SET_QUITETIME';

export const setQuiteTime = time => {
  return {
    time: time,
    type: SET_QUITETIME,
  };
};
