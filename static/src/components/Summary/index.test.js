// eslint-disable-next-line 
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Summary from './index';


describe('<Summary />', () => {
  let component;
  const summary = [
    {
      title: "test title",
      text: "test text"
    },
    {
      title: "test title 2",
      text: "test text 2"
    }
  ];


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<Summary />);
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
    it('renders summary items', () => {
      component = shallow(<Summary summary={summary}/>);

      expect(component.find('li')).toHaveLength(2);
      expect(component.find('li').at(0).find('.summary__title').text()).toEqual(summary[0].title);
      expect(component.find('li').at(1).find('.summary__title').text()).toEqual(summary[1].title);
    });
  });
}); 
