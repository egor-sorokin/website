// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Home from './index';
import ButtonExplore from './ButtonExplore';
import Switcher from '../../Switcher/index';


describe('<Home />', () => {
  let component;
  let spy;
  const isFetching = false;
  const person = {
    first_name: 'a',
    last_name: 'b',
  }
  const toggleAboutSection = jest.fn(() => {
  });
  const tweenline = {
    play: () => {
    }
  };


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<Home person={person} isFetching={false}/>);
    });


    it('renders without crashing', () => {
      expect(component).toBeDefined();
    });


    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });


    it('renders 1 components', () => {
      console.log(component.debug());
      expect(component.children()).toHaveLength(3);
    });
  });


  describe('lifecycle tests', () => {
    beforeEach(() => {
      component = '';
    });


    afterEach(() => {
      spy.mockClear();
    });


    it('calls componentDidMount', () => {
      spy = jest.spyOn(Home.prototype, 'componentDidMount');
      // eslint-disable-next-line
      component = shallow(<Home person={person} isFetching={false}/>);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });


  describe('props tests', () => {
    it('clicks on about button', () => {
      component = mount(<Home person={person} isFetching={false} toggleAboutSection={toggleAboutSection}/>);

      expect(component.find(<Switcher />)).toBeTruthy();
      expect(component.find(<ButtonExplore />)).toBeTruthy();
    });
  });


  describe('inner functions tests', () => {
    afterEach(() => {
      spy.mockClear();
    });


    it('calls play an animation', () => {
      spy = jest.spyOn(tweenline, 'play');
      // eslint-disable-next-line
      component = shallow(<Home person={person} isFetching={false}/>);
      component.setState({homeTween: tweenline});
      component.state().homeTween.play();
      expect(spy).toHaveBeenCalledTimes(1);

      spy.mockClear();
    });
  });
});


describe('<ButtonExplore />', () => {
  let component;
  const section = 'projects';
  const onClick = jest.fn(() => {
  });


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<ButtonExplore />);
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


  describe('inner functions tests', () => {
    it('clicks on explore button', () => {
      component = mount(<ButtonExplore onClick={onClick}/>);

      const exploreButton = component.find('a');
      expect(exploreButton).toBeTruthy();

      exploreButton.simulate('click', section);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
