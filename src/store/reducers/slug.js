import {
  ADD_RECORD,
  FETCH_SLUG,
  DELETE_RECORD,
  EDIT_RECORD,
} from 'store/actions/slug';
import { setToStorage } from 'global/helpers/helper';

const initialState = {
  hasCompleted: false,
  records: [],
  today: '',
};

const slug = (state = initialState, action) => {
  let newArray;
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
      newArray = state.records;
      newArray.splice(action.index, 1);
      state = {
        ...state,
        records: [...newArray],
      };
      break;
    case EDIT_RECORD:
      newArray = state.records;
      newArray[action.index].cup = action.cup;
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
