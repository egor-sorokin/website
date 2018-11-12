// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import About from './index';
import Summary from '../../Summary/index';
import OrderedList from '../../OrderedList/index';
import Logo from '../../Logo/index';
import LinkStretched from '../../LinkStretched/index';


describe('<About />', () => {
  let component;
  let spy;
  const tweenline = {
    play: () => {
    },
    reversed: () => {
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
  const toggleAboutSection = jest.fn(() => {
  });
  const onClick = jest.fn(() => {
    toggleAboutSection();
  });


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<About />);
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
    it('renders data', () => {
      component = mount(<About />);
      component.setProps({personData: personData});
      expect('personData' in component.props()).toBeTruthy();
      expect(component.find(<Summary />)).toBeTruthy();
      expect(component.find(<OrderedList />)).toBeTruthy();
      expect(component.find(<Logo />)).toBeTruthy();
      expect(component.find(<LinkStretched />)).toBeTruthy();
      expect(component.find('.about__title')).toBeTruthy();

      component.setProps({personData: {}});
    });
  });


  describe('close button functionality tests', () => {
    it('clicks on the close button', () => {
      component = mount(<About />);
      component.setProps({toggleAboutSection: toggleAboutSection});

      let closeButton = component.find('.button-close .link-stretched').at(0);
      expect(closeButton.prop('onClick')).toHaveLength(1);

      closeButton.simulate('click');

      expect(toggleAboutSection).toHaveBeenCalledTimes(1);
    });
  });


  describe('lifecycle tests', () => {
    beforeEach(() => {
      component = '';
    });


    afterEach(() => {
      spy.mockClear();
    });


    it('calls play an animation', () => {
      spy = jest.spyOn(tweenline, 'play');
      // eslint-disable-next-line
      component = shallow(<About isFetching={false}/>);
      component.setState({aboutTween: tweenline});
      component.state().aboutTween.play();
      expect(spy).toHaveBeenCalledTimes(1);
    });


    it('calls reversed animation', () => {
      spy = jest.spyOn(tweenline, 'reversed');
      // eslint-disable-next-line
      component = shallow(<About isFetching={false}/>);
      component.setState({aboutTween: tweenline});
      component.state().aboutTween.reversed();

      expect(spy).toHaveBeenCalledTimes(1);
    });


    it('calls componentDidMount', () => {
      spy = jest.spyOn(About.prototype, 'componentDidMount');
      // eslint-disable-next-line
      component = shallow(<About />);
      component.setProps({personData: personData});
      expect(spy).toHaveBeenCalledTimes(1);
    });


    it('calls componentDidUpdate', () => {
      spy = jest.spyOn(About.prototype, 'componentDidUpdate');
      // eslint-disable-next-line
      component = mount(<About />);
      component.setProps({personData: personData});
      expect(spy).toHaveBeenCalledTimes(1);
    });


    it('calls componentDidUpdate with updated props', () => {
      spy = jest.spyOn(About.prototype, 'componentDidUpdate');
      // eslint-disable-next-line
      component = shallow(<About isFetching={false}/>);
      component.setState({aboutTween: tweenline});
      component.setProps({isOpenedAbout: true});

      expect(spy).toHaveBeenCalledTimes(2);
    });
  });
});
