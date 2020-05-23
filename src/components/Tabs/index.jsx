import React, { memo } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import TabsM from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useStyles from './style';

const Tabs = ({
  tabs,
  currentTab,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <TabsM
        value={currentTab}
        onChange={onChange}
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="tavs scrollable"
        className={classes.tabsm}
      >
        {
          tabs.map((tab) => (
            <Tab key={tab} label={tab} />
          ))
        }
      </TabsM>
    </AppBar>
  );
};

Tabs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tabs: PropTypes.array,
  currentTab: PropTypes.number,
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  tabs: [],
  currentTab: 0,
  onChange: () => {},
};

export default memo(Tabs);
