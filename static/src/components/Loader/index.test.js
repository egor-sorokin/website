// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Loader from './index';

describe('<Loader />', () => {
  let component;
  let spy;
  const tweenline = {
    play: () => {
    }
  };

  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<Loader />);
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


  describe('lifecycle tests', () => {
    afterEach(() => {
      spy.mockClear();
    });


    it('calls componentDidMount', () => {
      spy = jest.spyOn(Loader.prototype, 'componentDidMount');
      // eslint-disable-next-line
      component = mount(<Loader />);
      expect(spy).toHaveBeenCalledTimes(1);
    });


    it('calls componentWillUnmount', () => {
      spy = jest.spyOn(Loader.prototype, 'componentWillUnmount');
      // eslint-disable-next-line
      component = mount(<Loader />);
      component.unmount();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });


  describe('inner functions tests', () => {
    afterEach(() => {
      spy.mockClear();
    });


    it('calls play an animation', () => {
      spy = jest.spyOn(tweenline, 'play');
      // eslint-disable-next-line
      component = mount(<Loader />);
      component.setState({loaderTween: tweenline});
      component.state().loaderTween.play();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
