import {
  SAVE_DATA__ADD,
  SAVE_DATA__TO_DEFAULT_STATE,
} from '../constants/saveData';

/**
 *
 * @param {Object} payload
 * @returns {Object}
 */
export const saveDataAdd = (payload = {}) => ({
  type: SAVE_DATA__ADD,
  payload: {
    ...payload,
    haveFile: true,
  },
});

/**
 *
 * @returns {Object}
 */
export const saveDataToDefaultState = () => ({
  type: SAVE_DATA__TO_DEFAULT_STATE,
  payload: {},
});
