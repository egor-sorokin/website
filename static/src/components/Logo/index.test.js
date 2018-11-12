// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Logo from './index';


describe('<Logo />', () => {
  let component;

  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<Logo />);
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
