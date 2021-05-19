import { ADD_RECORD } from '../actions/slug';
import { setToStorage } from '../../global/helper';

const initialState = {
  hasCompleted: false,
  records: [],
};

const slug = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      state = {
        ...state,
        records: state.records.push(action.record),
      };
      break;
    default:
      return state;
  }

  setToStorage('@slug', state);
  return state;
};

export default slug;
