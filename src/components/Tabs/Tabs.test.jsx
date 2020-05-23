/* eslint-disable react/jsx-props-no-spreading */
import 'core-js';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import faker from 'faker';

import Tabs from '.';

configure({
  adapter: new Adapter(),
});

const createTestProps = (props = {}) => ({
  tabs: new Array(2).fill(null).map(() => faker.random.uuid()),
  currentTab: 0,
  onChange: jest.fn(),
  ...props,
});

describe('Test <Tabs />', () => {
  describe('rendering', () => {
    describe('when it has no properties', () => {
      let wrapper;

      beforeAll(() => {
        wrapper = shallow(<Tabs />);
      });

      it('should render the component with no properties', () => {
        expect(wrapper.exists()).toBeTruthy();
      });
    });

    describe('when have properties', () => {
      let wrapper;
      let props;

      beforeAll(() => {
        props = createTestProps();
        wrapper = mount(<Tabs {...props} />);
      });

      it('should render the component with no properties', () => {
        expect(wrapper.exists()).toBeTruthy();

        const html = wrapper.html();
        props.tabs.forEach((tab) => {
          expect(html).toContain(tab);
        });
      });
    });
  });

  describe('callbacks', () => {
    describe('when click tab', () => {
      let props;
      let wrapper;

      beforeAll(() => {
        props = createTestProps();
        wrapper = mount(<Tabs {...props} />);
      });

      it.only('should fire onChange event', () => {
        const buttons = wrapper.find('button');
        const button = buttons.first();

        button.simulate('click');

        expect(props.onChange).toBeCalled();
        expect(props.onChange).toHaveBeenCalledTimes(1);
      });
    });
  });
});
