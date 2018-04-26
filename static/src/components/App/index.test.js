// eslint-disable-next-line
import { shallow, render, mount } from 'enzyme';
import React from 'react';
import App from './index';

describe('<App />', () => {
  const component = shallow(<App />);


  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });


  it('contains 5 components', () => {
    expect(component.children()).toHaveLength(5);
  });
});
