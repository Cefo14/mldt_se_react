/* eslint-disable react/jsx-props-no-spreading */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { useDropzone } from 'react-dropzone';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './style';

const DropZone = ({
  multiple,
  accept,
  onDrop,
  text,
  className,
}) => {
  const classes = useStyles();

  const { getRootProps, getInputProps } = useDropzone({ multiple, accept, onDrop });

  const rootProps = getRootProps({ className: classes.dropZone });
  const inputProps = getInputProps();

  return (
    <div className={clsx(classes.dropZoneContainer, className)}>
      <Paper {...rootProps}>
        <input {...inputProps} />
        <Typography className={classes.typography} variant="body1">
          {
            text.split('\n').map((item) => (
              <span key={item}>
                {item}
                <br />
              </span>
            ))
          }
        </Typography>
      </Paper>
    </div>
  );
};

DropZone.propTypes = {
  multiple: PropTypes.bool,
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onDrop: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};

DropZone.defaultProps = {
  multiple: false,
  accept: '',
  onDrop: () => {},
  text: '',
  className: '',
};

export default memo(DropZone);
