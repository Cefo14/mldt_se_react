import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Routes from '../routes';

import App from '.';

configure({
  adapter: new Adapter(),
});

describe('Test <App />', () => {
  describe('rendering', () => {
    it('should render the component without properties', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBeTruthy();
    });

    it('should contain the theme and the router', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBeTruthy();

      const router = wrapper.find(Routes);
      expect(router.exists()).toBeTruthy();
    });
  });
});
