import React, {
  useEffect,
  useCallback,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Logo from '../../components/Logo';

import { useSaveData } from '../../contexts/SaveData';
import { saveDataToDefaultState } from '../../actions/saveData';

import Tabs from '../../components/Tabs';

import Files from '../../utils/Files';
import OFFSETS from '../../utils/OFFSETS';

import PATHS from '../../routes/paths';

import useStyles from './style';

const { MONEY: MONEY_OFFSET, ...OFFSETS_WITHOUT_MONEY } = OFFSETS;
const TABS = Object.keys(OFFSETS_WITHOUT_MONEY);

const EditSaveData = ({ history }) => {
  const [saveData, dispatch] = useSaveData();
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState(0);
  const [money, setMoney] = useState(0);
  const [values, setValues] = useState([]);
  const [fileClass, setFileClass] = useState(new Files());

  const onChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const onChangeMoney = useCallback((event) => {
    const {
      target: {
        value,
      },
    } = event;
    setMoney(value);
  }, []);

  const onChangeValue = (fieldIndex) => (event) => {
    const {
      target: {
        value,
      },
    } = event;

    const newValues = [...values];
    const newValue = newValues[currentTab];
    const newField = { ...newValue[fieldIndex] };

    newField.value = value;
    newValues[currentTab][fieldIndex] = newField;

    setValues(newValues);
  };

  const generateMaxItems = useCallback(() => {
    const preValues = [...values].slice(0, 2);
    let nextValues = [...values].slice(2, values.length);
    const MAX_VALUE = 99;

    nextValues = nextValues.map((offset) => (
      offset.map((offsetValue) => ({
        ...offsetValue,
        value: MAX_VALUE,
      }))
    ));

    const newValues = [...preValues, ...nextValues];
    setValues(newValues);
  }, [values]);

  /**
   *
   * @param {Files} files
   * @param {Object} offset
   * @returns {Number}
   */
  const readOffsetValue = (files, offset) => {
    if (offset.bits === 8) return files.readTiny(offset.offset) || 0;
    if (offset.bits === 16) return files.readShort(offset.offset) || 0;
    return 0;
  };

  const writeOffsetValues = () => {
    try {
      const newMoneyOffset = { offset: MONEY_OFFSET, value: money };
      const newValues = [[newMoneyOffset], ...values];
      newValues
        .forEach((section) => {
          section.forEach((value) => {
            if (value.offset.bits === 8) {
              fileClass.writeTiny(value.offset.offset, value.value);
            }

            else if (value.offset.bits === 16) {
              fileClass.writeShort(value.offset.offset, value.value);
            }
          });
        });
      fileClass.save();
    }

    catch {
      // eslint-disable-next-line no-alert
      alert('File Error');
    }
  };

  /**
   * @param {Files} files
   * @param {Object} offsets
   * @returns {Array}
   */
  const formatOffset = useCallback((files, offsets) => (
    Object
      .keys(offsets)
      .map((offset) => {
        const offsetValue = offsets[offset];
        return {
          key: offset,
          value: readOffsetValue(files, offsetValue),
          offset: offsetValue,
        };
      })
  ), []);

  /**
   * @param {Files} files
   */
  const formatOffsetsToValues = useCallback((files) => (
    Object
      .keys(OFFSETS_WITHOUT_MONEY)
      .map((key) => {
        const offsets = OFFSETS_WITHOUT_MONEY[key];
        const offsetValues = formatOffset(files, offsets);
        return offsetValues;
      })
  ), [formatOffset]);

  const initFile = useCallback(async (file) => {
    const newFilesClass = new Files(file);
    await newFilesClass.init();

    // eslint-disable-next-line no-underscore-dangle
    const _money = readOffsetValue(newFilesClass, MONEY_OFFSET);
    const newValues = formatOffsetsToValues(newFilesClass);

    setMoney(_money);
    setValues(newValues);
    setFileClass(newFilesClass);
  }, [formatOffsetsToValues]);

  const dispatchSaveDataToDefaultState = useCallback(() => {
    dispatch(saveDataToDefaultState());
  }, [dispatch]);

  useEffect(() => {
    if (saveData.haveFile === false) history.push(PATHS.SELECT_SAVE_DATA);
    return () => dispatchSaveDataToDefaultState();
  }, [saveData, history, dispatchSaveDataToDefaultState]);

  useEffect(() => {
    if (saveData.haveFile) initFile(saveData.file);
  }, [saveData, initFile]);

  return (
    <Container className={classes.container}>
      <Logo />
      <div className={classes.moneyContainer}>
        <TextField
          label="MONEY"
          name="MONEY"
          variant="outlined"
          value={money}
          onChange={onChangeMoney}
        />
        <div className={classes.actionsContainer}>
          <Button variant="contained" color="default" onClick={generateMaxItems}>
            All Items
          </Button>
          <Button variant="contained" color="default" onClick={writeOffsetValues}>
            Download
          </Button>
        </div>
      </div>
      <div>
        <Grid container>
          <Grid item sm={2} className={classes.grid1}>
            <Tabs
              tabs={TABS}
              currentTab={currentTab}
              onChange={onChangeTab}
            />
          </Grid>
          <Grid item sm={10} className={classes.grid2}>
            <div className={classes.textFieldContainer}>
              <Grid container spacing={2}>
                {
                  (values[currentTab] || []).map((value, index) => (
                    <Grid key={value.key} item sm={4}>
                      <TextField
                        label={value.key}
                        name={value.key}
                        value={value.value}
                        variant="outlined"
                        type="number"
                        onChange={onChangeValue(index)}
                      />
                    </Grid>
                  ))
                }
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

EditSaveData.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default EditSaveData;
