import {
  ADD_RECORD,
  FETCH_SLUG,
  DELETE_RECORD,
  EDIT_RECORD,
  REMOVE_SLUG,
  TRANSFORM_RECORDS,
} from 'store/actions/slug';
import { setToStorage } from 'global/helpers/helper';
import { syncSlug } from 'global/database/Database.helper';

const initialState = {
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
    case REMOVE_SLUG:
      state = initialState;
      break;
    case TRANSFORM_RECORDS:
      state = {
        ...state,
        records: [...action.records],
      };
      break;
    default:
      return state;
  }

  setToStorage('@slug', state);
  syncSlug(state);
  return state;
};

export default slug;
