// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Content from './index';
import ImageGrid from '../ImageGrid/index';
import DescriptionList from '../DescriptionList/index';


describe('<Content />', () => {
  let component;
  const experiments = [
    {
      id: 1,
      label: 'title',
      url: '',
      image: 'assets/exp_name.jpg'
    }
  ];
  const image = {
    alt: 'testalt',
    src: 'testsrc'
  };
  const name = 'Name test';
  const info = [
    {
      label: 'Label test',
      text: 'Text test',
      url: ''
    }
  ];


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<Content />);
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


  describe('test setting props', () => {
    beforeEach(() => {
      component = mount(<Content />);
    });


    it('set props correctly', () => {
      component.setProps({name: name, info: info, image: image, experiments: experiments});

      expect('name' in component.props()).toEqual(true);
      expect('info' in component.props()).toEqual(true);
      expect('image' in component.props()).toEqual(true);
      expect('experiments' in component.props()).toEqual(true);
    });
  });


  describe('test props', () => {
    it('renders descriptionList', () => {
      component = shallow(
        <Content info={info}/>
      );

      expect(component.contains(<DescriptionList listData={info}/>)).toBeTruthy();
    });


    it('renders only imageGrid', () => {
      component = shallow(
        <Content experiments={experiments}/>
      );

      expect(component.contains(<img className="image" title={image.alt} alt={image.alt}
                                     src={image.src}/>)).toBeFalsy();
      expect(component.contains(<ImageGrid gridData={experiments}/>)).toBeTruthy();
    });


    it('renders only image', () => {
      component = shallow(
        <Content image={image}/>
      );

      expect(component.contains(<img className="image" title={image.alt} alt={image.alt}
                                     src={image.src}/>)).toBeTruthy();
      expect(component.contains(<ImageGrid gridData={experiments}/>)).toBeFalsy();
    });
  });
});
