import { SET_QUITETIME } from '../actions/information';
import dayjs from '../../global/day';

const initialState = {
  quiteTime: {
    0: {
      start: dayjs().hour(22).minute(0).second(0),
      end: dayjs().hour(6).minute(0).second(0),
      diff: 8,
    },
  },
  interval: 0,
};

const information = (state = initialState, { time, type }) => {
  switch (type) {
    case SET_QUITETIME:
      //console.log(action);
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
