// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Home from './index';
import ButtonExplore from './ButtonExplore';


describe('<Home />', () => {
  let component;
  let spy;
  let scrollToProjects;
  const section = 'projects';
  const tweenline = {
    play: () => {
    }
  };
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
      component = shallow(<Home />);
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
      component = shallow(<Home />);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });


  describe('inner functions tests', () => {
    it('calls play an animation', () => {
      spy = jest.spyOn(tweenline, 'play');
      // eslint-disable-next-line
      component = shallow(<Home isFetching={false}/>);
      component.setState({homeTween: tweenline});
      component.state().homeTween.play();
      expect(spy).toHaveBeenCalledTimes(1);

      spy.mockClear();
    });


    // TODO: Tests should mock DOM: Cannot read property 'offsetTop' of null
    it('clicks on explore button', () => {
      component = mount(<Home />);
      scrollToProjects = jest.fn(() => 'mock implementation');
    
      const exploreButton = component.find(ButtonExplore).first().find('a').first();
      exploreButton.simulate('click', section);
      expect(scrollToProjects).toHaveBeenCalled();
      expect(scrollToProjects).toHaveBeenCalledTimes(1);
    });
  });
});
