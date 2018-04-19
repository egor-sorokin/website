import React from 'react';
import WorkExperience from './index';
import { shallow, render, mount } from 'enzyme';

describe('<WorkExperience />', () => {
  it('renders 1 <WorkExperience /> component', () => {
    const component = shallow(<WorkExperience />);
    expect(component).toHaveLength(1);
  })
});