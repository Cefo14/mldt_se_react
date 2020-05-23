import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { SAVE_DATA__DEFAULT_STATE } from '../constants/saveData';
import reducer from '../reducers/saveData';

const SaveDataContext = createContext();

export const SaveDataProvider = ({ children }) => {
  const contextValue = useReducer(reducer, SAVE_DATA__DEFAULT_STATE);
  return (
    <SaveDataContext.Provider value={contextValue}>
      {children}
    </SaveDataContext.Provider>
  );
};

SaveDataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export const useSaveData = () => {
  const contextValue = useContext(SaveDataContext);
  return contextValue;
};
