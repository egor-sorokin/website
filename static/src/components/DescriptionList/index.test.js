// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import DescriptionList from './index';
import LinkMasked from '../LinkMasked/index';


describe('<DescriptionList />', () => {
  let component;
  const listData = [
    {
      label: 'Label test',
      text: 'Text test',
      url: ''
    },
    {
      label: 'Label test',
      text: 'Text test',
      url: 'example.url'
    }
  ];


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<DescriptionList />);
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


  describe('test setting props', () => {
    beforeEach(() => {
      component = mount(<DescriptionList />);
    });


    it('set props correctly', () => {
      expect('listData' in component.props()).toEqual(true);
    });
  });


  describe('test props', () => {
    beforeEach(() => {
      component = shallow(
        <DescriptionList listData={listData}/>
      );
    });


    it('renders a plain text', () => {
      expect(component.find('li').children().someWhere(n => n.hasClass('item__plain-text'))).toBeTruthy();
    });


    it('renders LinkMasked', () => {
      expect(component.find(LinkMasked)).toHaveLength(1);
      expect(component.find('li').children().someWhere(n => n.hasClass('item__link'))).toBeTruthy();
    });
  });
});
