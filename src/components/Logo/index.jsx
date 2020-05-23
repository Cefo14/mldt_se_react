import React, { memo } from 'react';

import logo from '../../assets/logo.webp';

import useStyles from './style';

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      <img
        alt="logo"
        src={logo}
        className={classes.logo}
      />
    </div>
  );
};

export default memo(Logo);
