import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import Logo from '../../components/Logo';
import DropZone from '../../components/DropZone';

import PATHS from '../../routes/paths';

import { useSaveData } from '../../contexts/SaveData';
import { saveDataAdd } from '../../actions/saveData';

import useStyles from './style';

const SelectSaveData = ({ history }) => {
  const [, dispatch] = useSaveData();
  const classes = useStyles();

  /**
   *
   * @param {Object} payload
   */
  const dispatchSaveDataAdd = useCallback((payload) => {
    dispatch(saveDataAdd(payload));
  }, [dispatch]);

  const handleOnDrop = useCallback((files) => {
    const [file] = files;
    const payload = {
      file,
    };
    dispatchSaveDataAdd(payload);
    history.push(PATHS.EDIT_SAVE_DATA);
  }, [history, dispatchSaveDataAdd]);

  return (
    <Container
      className={classes.container}
    >
      <Logo />
      <div className={classes.dropZoneContainer}>
        <DropZone
          text="Drop or click to load the file (ML4_001.sav)"
          onDrop={handleOnDrop}
          accept=".sav"
        />
      </div>
    </Container>
  );
};

SelectSaveData.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SelectSaveData;
