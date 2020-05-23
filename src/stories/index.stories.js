/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router';
import { addDecorator } from "@storybook/react";

import Theme from '../theme';

const ThemeDecorator = story => (
  <Theme>
    { story() }
  </Theme>
);

const HistoryDecorator = story => (
  <MemoryRouter initialEntries={['/']}>
    { story() }
  </MemoryRouter>
);

addDecorator(ThemeDecorator);
addDecorator(HistoryDecorator);