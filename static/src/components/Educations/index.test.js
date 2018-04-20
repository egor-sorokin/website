import React from 'react';
import Educations from './index';
import { shallow, render, mount } from 'enzyme';

describe('<Educations />', () => {
  const component = shallow(<Educations />);

  it('renders without crashing', () => {
    shallow(<Educations />);
  });


  it('renders 1 <Educations /> component', () => {
    expect(component).toHaveLength(1);
  });


  it('renders error message', () => {
    component.setState({ error: 'error message' });

    expect(component.state().error).toBe('error message');
    expect(component.html()).toBe(`<p>${component.state().error}</p>`);

    component.setState({ error: null });
  });


  it('renders loading indicator', () => {
    component.setState({ isFetching: true });

    expect(component.state().isFetching).toBe(true);
    expect(component.html()).toBe('<p>Loading...</p>');

    component.setState({ isFetching: false });
  });


  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
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
    const wrapper = mount(<Educations />);
    expect(spy).toHaveBeenCalledTimes(1);

    afterEach(() => {
      spy.mockClear()
    });
  });
});
