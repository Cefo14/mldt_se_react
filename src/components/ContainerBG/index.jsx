import React, { memo } from 'react';
import PropTypes from 'prop-types';

import bg from '../../assets/bg.webp';

import useStyles from './style';

const ContainerBG = ({ children }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      { children }
    </div>
  );
};

ContainerBG.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default memo(ContainerBG);
