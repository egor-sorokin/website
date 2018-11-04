// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import LinkStretched from '../LinkStretched/index';
import Navbar from './index';
import {NAVBAR_ITEMS} from '../../constants/index';


describe('<Navbar />', () => {
  let component;
  let scrollToSection;
  const section = 'home';


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


  describe('link functionality tests', () => {
    beforeEach(() => {
      scrollToSection = jest.fn(() => 'mock implementation');
    });


    it('clicks on an anchor link', () => {
      component = mount(<Navbar items={NAVBAR_ITEMS}/>);

      const linkButton = component.find(LinkStretched).first().find('a').first();
      linkButton.simulate('click', section);

      expect(scrollToSection).toHaveBeenCalled();
      expect(scrollToSection).toHaveBeenCalledTimes(1);
    });
  });
});
