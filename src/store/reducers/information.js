import { SET_QUITETIME } from '../actions/information';

const initialState = {
  quiteTime: {
    0: {
      start: {
        hour: 23,
        minute: 0,
      },
      end: {
        hour: 6,
        minute: 0,
      },
      diff: 7,
    },
  },
  intervals: {},
};

const information = (state = initialState, { time, type }) => {
  switch (type) {
    case SET_QUITETIME:
      return {
        ...state,
        quiteTime: {
          ...state.quiteTime,
          ...time,
        },
      };
    default:
      return state;
  }
};

export default information;
