// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import LinkStretched from '../LinkStretched/index';
import Navbar from './index';
import {NAVBAR_ITEMS} from '../../constants/index';


describe('<Navbar />', () => {
  let component;

  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<Navbar />);
    });


    it('renders without crashing', () => {
      expect(component).toBeDefined();
    });


    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });


    it('renders 0 component', () => {
      expect(component.children()).toHaveLength(0);
    });
  });


  describe('props tests', () => {
    it('finds anchor link', () => {
      component = mount(<Navbar items={NAVBAR_ITEMS}/>);

      expect(component.find(LinkStretched).first().find('a').first()).toBeTruthy();
    });
  });
});
