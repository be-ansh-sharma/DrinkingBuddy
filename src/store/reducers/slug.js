import { ADD_RECORD } from '../actions/slug';
import { setToStorage } from '../../global/helper';

const initialState = {
  hasCompleted: false,
  records: [],
};

const slug = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_RECORD:
      state = {
        ...state,
        records: [action.record, ...state.records],
      };
      break;
    default:
      return state;
  }

  setToStorage('@slug', state);
  return state;
};

export default slug;
