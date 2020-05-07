// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Switcher from './index';
import LinkStretched from  '../LinkStretched/index';


describe('<Switcher />', () => {
  let component;
  const data = {
    withUrl: {
      url: 'test.url'
    },
    withoutUrl: {
      url: ''
    }
  };
  const switcherLink = {
    about: {
      text: 'about',
      type: 'white'
    },
    another: {
      text: 'test text',
      type: 'black'
    }
  };
  const onClick = jest.fn(() => {
  });


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<Switcher />);
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


  describe('props tests', () => {
    beforeEach(() => {
      component = mount(<Switcher />);
    });


    it('checks onClick function in props', () => {
      component.setProps({onClick: onClick});
      expect('onClick' in component.props()).toBeTruthy();
    });


    it('renders switcher link', () => {
      component.setProps({url: data.withUrl.url, switcherLink: switcherLink.another});
      expect('url' in component.props()).toBeTruthy();
      expect('switcherLink' in component.props()).toBeTruthy();
      expect(component.find(LinkStretched)).toBeTruthy();
      expect(component.find(LinkStretched).find('a').text()).toEqual(switcherLink.another.text);
      expect(component.find('div').someWhere(n => n.hasClass('line--bottom'))).toBeTruthy();
      expect(component.find('a').someWhere(n => n.hasClass('text-c-dune'))).toBeTruthy();
      expect(component.find('div').someWhere(n => n.hasClass('switcher--black'))).toBeTruthy();
    });


    it('renders only line from the top to the middle of the screen', () => {
      expect(component.find('div').contains('.line--bottom')).toBeFalsy();
      expect(component.find('div').contains(LinkStretched)).toBeFalsy();
    });


    it('checks that the current page is About', () => {
      component.setProps({switcherLink: switcherLink.about});
      expect('switcherLink' in component.props()).toBeTruthy();
      expect(component.find(LinkStretched)).toBeTruthy();
      expect(component.find(LinkStretched).find('a').text()).toEqual(switcherLink.about.text);
      expect(component.find('div').someWhere(n => n.hasClass('line--bottom'))).toBeTruthy();
      expect(component.find('a').someWhere(n => n.hasClass('text-c-mercury-light'))).toBeTruthy();
      expect(component.find('div').someWhere(n => n.hasClass('switcher--white'))).toBeTruthy();
    });
  });
});
