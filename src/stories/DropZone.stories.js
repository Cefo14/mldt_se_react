import React from 'react';
import { action } from '@storybook/addon-actions';
import faker from 'faker';

import DropZoneComponent from '../components/DropZone';

export const DropZone = () => (
  <DropZoneComponent
    text={faker.random.word()}
    onDrop={action('onDrop')}
  />
);

export default {
  title: 'DropZone',
  component: DropZone,
};
