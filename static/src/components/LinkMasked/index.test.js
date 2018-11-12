// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import LinkMasked from './index';


describe('<LinkMasked />', () => {
  let component;
  const linkData = {
    label: 'Label test',
    text: 'Text test',
    url: 'example.url'
  };


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<LinkMasked />);
    });

    
    it('renders without crashing', () => {
      expect(component).toBeDefined();
    });


    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });


    it('renders 2 components', () => {
      expect(component.children()).toHaveLength(2);
    });
  });


  describe('traversions tests', () => {
    beforeEach(() => {
      component = shallow(<LinkMasked linkData={linkData}/>);
    });


    it('checks a sameness of a link placeholder and a mask text', () => {
      expect(component.find('.link-masked__placeholder').text()).toEqual(linkData.text);
      expect(component.find('.link-masked__text').text()).toEqual(linkData.text);
    });
  });
});
