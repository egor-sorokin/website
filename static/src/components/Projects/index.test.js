import React from 'react';
import Projects from './index';
import { shallow, render, mount } from 'enzyme';

describe('<Projects />', () => {
  const component = shallow(<Projects />);
  const errorMessage = 'error message';
  const loadingIndicator = 'Loading...';
  const projects = [
    { id: 1 },
    { id: 2 }
  ];
  
  
  it('renders without crashing', () => {
    shallow(<Projects />);
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
    component.setState({ data: { projects: projects }});

    expect(component.state().data.projects).toEqual(projects);
    expect(component.dive().children()).toHaveLength(projects.length);

    component.setState({ data: {}});
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
