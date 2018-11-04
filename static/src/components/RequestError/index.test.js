// eslint-disable-next-line 
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import RequestError from './index';


describe('<RequestError />', () => {
  let component;

  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<RequestError />);
    });


    it('renders without crashing', () => {
      expect(component).toBeDefined();
    });


    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });


    it('renders 1 component', () => {
      expect(component.children()).toHaveLength(1);
    });
  });
}); 
