import React from 'react';
import WorkExperience from './index';
import { shallow, render, mount } from 'enzyme';

describe('<WorkExperience />', () => {
  const component = shallow(<WorkExperience />);
  const errorMessage = 'error message';
  const loadingIndicator = 'Loading...';
  const workExperience = [
    { id: 1 },
    { id: 2 }
  ];


  it('renders without crashing', () => {
    shallow(<WorkExperience />);
  });


  it('renders error message', () => {
    component.setState({ error: errorMessage });

    expect(component.state().error).toBe(errorMessage);
    expect(component.html()).toBe(`<div><p>${component.state().error}</p></div>`);

    component.setState({ error: null });
  });


  it('renders loading indicator', () => {
    component.setState({ isFetching: true });

    expect(component.state().isFetching).toBe(true);
    expect(component.html()).toBe(`<div><p>${loadingIndicator}</p></div>`);

    component.setState({ isFetching: false });
  });


  it('renders data', () => {
    component.setState({ data: { workExperience: workExperience }});

    expect(component.state().data.workExperience).toEqual(workExperience);
    expect(component.dive().children()).toHaveLength(workExperience.length);

    component.setState({ data: {}});
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
