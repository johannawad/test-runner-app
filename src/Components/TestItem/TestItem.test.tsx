import React from 'react';
import { TestItem } from './TestItem';
import { shallow } from 'enzyme';
import { Test } from '../../Types/Test';
describe('TestItem', () => {
  it('should render correctly', () => {
    const test: Test = { description: 'desc', run: jest.fn };
    const component = shallow(<TestItem test={test} />);
    expect(component).toMatchSnapshot();
  });
});
