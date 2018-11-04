// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import UnorderedList from './index';
import LinkMasked from '../LinkMasked/index';
import {LINK_MASKED} from '../../constants/index';


describe('<UnorderedList />', () => {
  let component;
  const title = 'title';
  let items = [
    {
      "id": 1,
      "text": "test text 1",
      "url": "test.urlone"
    },
    {
      "id": 2,
      "text": "test text 2",
      "url": "test.urltwo"
    }
  ];

  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<UnorderedList />);
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
      component = mount(<UnorderedList items={items}/>);
    });


    it('renders 1 simple link', () => {
      expect('items' in component.props()).toBeTruthy();
      expect(component.find('li').first().childAt(0).is('a')).toBeTruthy();
    });


    it('renders masked link', () => {
      console.log(component.debug());
      component.setProps({type: LINK_MASKED});
      console.log(component.debug());

      expect('items' in component.props()).toBeTruthy();
      expect('type' in component.props()).toBeTruthy();
      expect(component.prop('type')).toEqual(LINK_MASKED);
      expect(component.find(LinkMasked)).toHaveLength(2);
    });


    it('renders a title for list', () => {
      component.setProps({title: title});
      expect('items' in component.props()).toBeTruthy();
      expect('title' in component.props()).toBeTruthy();
      expect(component.prop('title')).toEqual(title);
      expect(component.find('.unorderedlist__title')).toHaveLength(1);
    });
  });
});
