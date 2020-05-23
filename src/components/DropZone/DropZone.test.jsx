/* eslint-disable react/jsx-props-no-spreading */
import 'core-js';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import faker from 'faker';

import DropZone from '.';

configure({
  adapter: new Adapter(),
});

const createTestProps = (props = {}) => ({
  multiple: true,
  accept: '',
  onDrop: jest.fn(),
  text: faker.random.word(),
  className: '',
  ...props,
});

describe('Test <DropZone />', () => {
  describe('rendering', () => {
    describe('when it has no properties', () => {
      let wrapper;

      beforeAll(() => {
        wrapper = shallow(<DropZone />);
      });

      it('should render the component with no properties', () => {
        expect(wrapper.exists()).toBeTruthy();

        const input = wrapper.find('input[type="file"]');
        expect(input.exists()).toBeTruthy();
      });
    });

    describe('when have properties', () => {
      let wrapper;
      let props;

      beforeAll(() => {
        props = createTestProps();
        wrapper = shallow(<DropZone {...props} />);
      });

      it('should render the component with no properties', () => {
        expect(wrapper.exists()).toBeTruthy();

        const input = wrapper.find('input[type="file"]');
        expect(input.exists()).toBeTruthy();

        expect(wrapper.html()).toContain(props.text);
      });
    });
  });

  describe('callbacks', () => {
    describe('when drop file', () => {
      let props;
      let wrapper;
      let file;
      let files;

      beforeAll(() => {
        props = createTestProps();
        wrapper = mount(<DropZone {...props} />);
        file = new File(['file'], 'file.txt', { type: 'text/plain' });
        files = [file];
      });

      it('should fire onDrop event', () => {
        const dropZone = wrapper.children();

        dropZone.simulate('drop', {
          dataTransfer: {
            files: [file],
            items: files.map((_file) => ({
              kind: 'file',
              type: _file.type,
              getAsFile: () => _file,
            })),
            types: ['Files'],
          },
          preventDefault: () => {},
          persist: () => {},
        });
      });
    });
  });
});
