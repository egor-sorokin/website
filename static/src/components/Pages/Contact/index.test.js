// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Contact from './index';
import Logo from '../../Logo/index';
import UnorderedList from '../../UnorderedList/index';
import Navbar from '../../Navbar/index';


describe('<Contact />', () => {
  let component;
  const personData = {
    id: 1,
    first_name: 'Bob',
    last_name: 'Cat',
    email: 'example@admin.com',
    summary: [
      {
        title: 'test title',
        text: 'test text'
      },
      {
        title: 'test title 2',
        text: 'test text 2'
      }
    ],
    socials: {
      title: 'test title',
      items: [
        {
          id: 1,
          text: 'test text 1',
          url: 'test.urlone'
        },
        {
          id: 2,
          text: 'test text 2',
          url: 'test.urltwo'
        }
      ]
    }
  };


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<Contact />);
    });


    it('renders without crashing', () => {
      expect(component).toBeDefined();
    });


    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });


    it('renders 1 components', () => {
      expect(component.children()).toHaveLength(1);
    });
  });


  describe('props tests', () => {
    it('renders data', () => {
      component = mount(<Contact />);
      component.setProps({personData: personData});
      expect('personData' in component.props()).toBeTruthy();
      expect(component.find(<Navbar />)).toBeTruthy();
      expect(component.find(<Logo />)).toBeTruthy();
      expect(component.find(<UnorderedList />)).toBeTruthy();

      component.setProps({personData: {}});
    });
  });
});
