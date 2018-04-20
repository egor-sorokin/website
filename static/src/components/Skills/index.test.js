import React from 'react';
import Skills from './index';
import { shallow, render, mount } from 'enzyme';

describe('<Skills />', () => {
  const component = shallow(<Skills />);

  it('renders without crashing', () => {
    shallow(<Skills />);
  });

  it('renders 1 <Skills /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Skills>
        <div className="unique" />
      </Skills>
    ));
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(Skills.prototype, 'componentDidMount');
    const wrapper = mount(<Skills />);
    expect(spy).toHaveBeenCalledTimes(1);

    afterEach(() => {
      spy.mockClear()
    });
  });
});