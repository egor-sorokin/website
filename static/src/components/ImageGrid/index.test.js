// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import ImageGrid from './index';


describe('<ImageGrid />', () => {
  let component;
  const gridData = [
    {
      id: 1,
      label: 'title',
      url: '',
      image: 'assets/exp_name.jpg'
    },
    {
      id: 2,
      label: 'title',
      url: 'test.url',
      image: 'assets/exp_name.jpg'
    },
    {
      id: 3,
      label: 'title',
      url: 'test.url',
      image: 'assets/exp_name.jpg'
    },
    {
      id: 4,
      label: 'title',
      url: '',
      image: 'assets/exp_name.jpg'
    }
  ];


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<ImageGrid />);
    });


    it('renders without crashing', () => {
      expect(component).toBeDefined();
    });


    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });


    it('renders 4 components', () => {
      expect(component.children()).toHaveLength(0);
    });
  });


  describe('props tests', () => {
    beforeEach(() => {
      component = shallow(<ImageGrid gridData={gridData}/>);
    });


    it('renders 2 image with link', () => {
      expect(component.find('a')).toHaveLength(2);
    });


    it('renders 2 image without link', () => {
      expect(component.find('div')).toHaveLength(2);
    });
  });
});
