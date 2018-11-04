// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import LinkStretched from './index';

describe('<LinkStretched />', () => {
  let component, onClick;
  const text = 'Text test';
  const url = 'test.url';
  const event = {
    preventDefault: () => {
    },
    currentTarget: {
      dataset: {
        anchorId: 'test.url'
      }
    }
  };


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<LinkStretched />);
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


  describe('traversions tests', () => {
    beforeEach(() => {
      component = shallow(<LinkStretched text={text}/>);
    });


    it('checks a link text', () => {
      expect(component.find('.link-stretched').text()).toEqual(text);
    });
  });


  describe('link functionality tests', () => {
    beforeEach(() => {
      jest.spyOn(event, 'preventDefault');
      onClick = jest.fn(() => 'mock implementation');
    });


    it('clicks on an anchor link', () => {
      component = shallow(<LinkStretched text={text} url={url} onClick={onClick}/>);

      const linkButton = component.find('a').first();
      linkButton.simulate('click', event);

      expect(onClick).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalledTimes(1);
    });


    it('clicks on a button link', () => {
      component = shallow(<LinkStretched text={text} onClick={onClick}/>);

      const linkButton = component.find('a').first();
      linkButton.simulate('click', event);

      expect(event.preventDefault).toBeCalled();
      expect(onClick).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
