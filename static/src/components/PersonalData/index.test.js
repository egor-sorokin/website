import React from 'react';
import PersonalData from './index';
import { shallow, render, mount } from 'enzyme';

describe('<PersonalData />', () => {
  it('renders 1 <PersonalData /> component', () => {
    const component = shallow(<PersonalData />);
    expect(component).toHaveLength(1);
  })
});