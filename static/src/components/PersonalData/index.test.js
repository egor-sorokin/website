import React from 'react';
import PersonalData from './index';
import { shallow, render, mount } from 'enzyme';

describe('<PersonalData />', () => {
  const component = shallow(<PersonalData />);
  const errorMessage = 'error message';
  const loadingIndicator = 'Loading...';
  const personalData = {
    id: 1,
    first_name: 'Bob',
    last_name: 'Cat',
    email: 'example@admin.com',
    summary: 'blablabla'
  };


  it('renders without crashing', () => {
    shallow(<PersonalData />);
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
    component.setState({ data: { personalData: personalData }});

    expect(component.state().data.personalData).toEqual(personalData);
    // expect(component.dive().children()).toHaveLength(educations.length);

    component.setState({ data: {}});
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
