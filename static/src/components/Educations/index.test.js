// eslint-disable-next-line
import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Educations from './index';

describe('<Educations />', () => {
  const component = shallow(<Educations />);
  const errorMessage = 'error message';
  const loadingIndicator = 'Loading...';
  const educations = [
    { id: 1 },
    { id: 2 },
  ];


  it('renders without crashing', () => {
    shallow(<Educations />);
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
    component.setState({ data: { educations } });

    expect(component.state().data.educations).toEqual(educations);
    expect(component.dive().children()).toHaveLength(educations.length);

    component.setState({ data: {} });
  });


  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Educations>
        <div className="unique" />
      </Educations>
    ));

    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });


  it('calls componentDidMount', () => {
    const spy = jest.spyOn(Educations.prototype, 'componentDidMount');
    // eslint-disable-next-line
    const wrapper = mount(<Educations />);
    expect(spy).toHaveBeenCalledTimes(1);

    afterEach(() => {
      spy.mockClear();
    });
  });
});
