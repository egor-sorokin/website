import React from 'react';
import Skills from './index';
import { shallow, render, mount } from 'enzyme';

describe('<Skills />', () => {
  const component = shallow(<Skills />);
  const errorMessage = 'error message';
  const loadingIndicator = 'Loading...';
  const skills = [
    { id: 1 },
    { id: 2 }
  ];


  it('renders without crashing', () => {
    shallow(<Skills />);
  });


  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
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
    component.setState({ data: { skills: skills }});

    expect(component.state().data.skills).toEqual(skills);
    expect(component.dive().children()).toHaveLength(skills.length);

    component.setState({ data: {}});
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
