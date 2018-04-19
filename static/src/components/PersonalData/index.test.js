import React from 'react';
import PersonalData from './index';
import { shallow, render, mount } from 'enzyme';

describe('<PersonalData />', () => {
  const component = shallow(<PersonalData />);

  it('renders without crashing', () => {
    shallow(<PersonalData />);
  });

  it('renders 1 <PersonalData /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <PersonalData>
        <div className="unique" />
      </PersonalData>
    ));
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(PersonalData.prototype, 'componentDidMount');
    const wrapper = mount(<PersonalData />);
    expect(spy).toHaveBeenCalledTimes(1);

    afterEach(() => {
      spy.mockClear()
    });
  });
});