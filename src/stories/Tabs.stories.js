import React from 'react';
import { action } from '@storybook/addon-actions';
import faker from 'faker';

import TabsComponent from '../components/Tabs';

const tabs = new Array(5).fill(undefined).map(() => faker.random.word());

export const Tabs = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const onChange = (event, tab) => {
    setCurrentTab(tab);
    action('onChange')(event, tab);
  };

  return (
    <TabsComponent
      tabs={tabs}
      currentTab={currentTab}
      onChange={onChange}
    />
  );
};

export default {
  title: 'Tabs',
  component: Tabs,
};
