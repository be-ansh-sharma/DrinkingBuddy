import { ADD_RECORD, FETCH_SLUG, DELETE_RECORD } from '../actions/slug';
import { setToStorage } from '../../global/helpers/helper';

const initialState = {
  hasCompleted: false,
  records: [],
};

const slug = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      state = {
        ...state,
        records: [action.record, ...state.records],
      };
      break;
    case FETCH_SLUG:
      state = {
        ...state,
        ...action.slug,
      };
      break;
    case DELETE_RECORD:
      let newArray = state.records;
      newArray.splice(action.index, 1);
      state = {
        ...state,
        records: [...newArray],
      };
      break;
    default:
      return state;
  }

  setToStorage('@slug', state);
  return state;
};

export default slug;
