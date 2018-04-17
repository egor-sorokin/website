import React from 'react';
import Projects from './index';
import { shallow, render, mount } from 'enzyme';

describe('<Projects />', () => {
  it('renders 1 <Projects /> component', () => {
    const component = shallow(<Projects />);
    expect(component).toHaveLength(1);
  })
});