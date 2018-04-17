import React from 'react';
import Skills from './index';
import { shallow, render, mount } from 'enzyme';

describe('<Skills />', () => {
  it('renders 1 <Skills /> component', () => {
    const component = shallow(<Skills />);
    expect(component).toHaveLength(1);
  })
});