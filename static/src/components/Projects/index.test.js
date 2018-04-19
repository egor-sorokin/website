import React from 'react';
import Projects from './index';
import { shallow, render, mount } from 'enzyme';

describe('<Projects />', () => {
  const component = shallow(<Projects />);

  it('renders without crashing', () => {
    shallow(<Projects />);
  });

  it('renders 1 <Projects /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Projects>
        <div className="unique" />
      </Projects>
    ));
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(Projects.prototype, 'componentDidMount');
    const wrapper = mount(<Projects />);
    expect(spy).toHaveBeenCalledTimes(1);

    afterEach(() => {
      spy.mockClear()
    });
  });
});