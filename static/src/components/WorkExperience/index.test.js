import React from 'react';
import WorkExperience from './index';
import { shallow, render, mount } from 'enzyme';

describe('<WorkExperience />', () => {
  const component = shallow(<WorkExperience />);

  it('renders without crashing', () => {
    shallow(<WorkExperience />);
  });

  it('renders 1 <WorkExperience /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <WorkExperience>
        <div className="unique" />
      </WorkExperience>
    ));
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(WorkExperience.prototype, 'componentDidMount');
    const wrapper = mount(<WorkExperience />);
    expect(spy).toHaveBeenCalledTimes(1);

    afterEach(() => {
      spy.mockClear()
    });
  });
});