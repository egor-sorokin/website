import React from 'react';
import Educations from './index';
import { shallow, render, mount } from 'enzyme';

describe('<Educations />', () => {
  it('renders 1 <Educations /> component', () => {
    const component = shallow(<Educations />);
    expect(component).toHaveLength(1);
  })
});
