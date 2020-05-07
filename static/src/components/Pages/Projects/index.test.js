// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Projects from './index';
import Switcher from '../../Switcher/index';


describe('<Projects />', () => {
  let component;
  const projects = [
    {
      id: 1,
      name: 'test name projects',
      url: 'test.url',
      info: [
        {
          label: 'test role',
          text: 'test text',
          url: 'test.info.url'
        }
      ],
      image: {
        src: 'test.src',
        alt: 'test alt'
      }
    }
  ];


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<Projects />);
    });


    it('renders without crashing', () => {
      expect(component).toBeDefined();
    });


    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });


    it('renders 0 components', () => {
      expect(component.children()).toHaveLength(0);
    });
  });


  describe('props test', () => {
    it('renders data', () => {
      component = mount(<Projects />);
      component.setProps({ projects });

      expect(component.prop('projects')).toEqual(projects);
      // console.log(component.debug());
      expect(component.find('.slide-inner')).toHaveLength(1);
      expect(component.find('.line--top')).toHaveLength(1);
      expect(component.find('.line--bottom')).toHaveLength(1);
      expect(component.find('#projects')).toHaveLength(1);
      expect(component.find(<Switcher />)).toBeTruthy();
    });
  });
});
