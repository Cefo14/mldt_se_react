import {
  SAVE_DATA__ADD,
  SAVE_DATA__TO_DEFAULT_STATE,
  SAVE_DATA__DEFAULT_STATE,
} from '../constants/saveData';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SAVE_DATA__ADD: return { ...state, ...payload };
    case SAVE_DATA__TO_DEFAULT_STATE: return SAVE_DATA__DEFAULT_STATE;
    default: return state;
  }
};
