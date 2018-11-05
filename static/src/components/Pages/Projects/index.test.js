// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Projects from './index';
import Content from '../../Content/index';
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
      },
      experiments: []
    },
    {
      id: 2,
      name: 'test name experiments',
      url: '',
      info: [
        {
          label: 'test role 2',
          text: '-',
          url: ''
        }
      ],
      image: {
        src: '',
        alt: ''
      },
      experiments: [
        {
          id: 1,
          label: 'title',
          url: '',
          image: 'assets/exp_name.jpg'
        }
      ]
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
      component.setProps({data: {projects}});

      expect(component.prop('data').projects).toEqual(projects);
      // console.log(component.debug());
      expect(component.find('.slide-inner')).toHaveLength(2);
      expect(component.find('.line--top')).toHaveLength(2);
      expect(component.find('.line--bottom')).toHaveLength(1);
      expect(component.find('#projects')).toHaveLength(1);
      expect(component.find('#experiments')).toHaveLength(1);
      expect(component.find(<Content />)).toBeTruthy();
      expect(component.find(<Switcher />)).toBeTruthy();

      component.setProps({data: {}});
    });
  });
});
