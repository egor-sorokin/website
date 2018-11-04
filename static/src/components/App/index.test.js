// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import React from 'react';
import App from './index';
import {API_DELAY} from '../../constants/index';
import Home from '../Pages/Home/index';
import About from '../Pages/About/index';
import Contact from '../Pages/Contact/index';
import Projects from '../Pages/Projects/index';
import Loader from '../Loader/index';
import RequestError from '../RequestError/index';
// import RequestError from '../RequestError/index';


describe('<App />', () => {
  let component;
  const errorMessage = 'error message';
  const person = {
    id: 1,
    first_name: 'Bob',
    last_name: 'Cat',
    email: 'example@admin.com',
    summary: 'blablabla',
  };
  const projects = {
    id: 1,
    name: "Southwestern University",
    url: "https://www.southwestern.edu",
    info: [
      {
        label: "role",
        text: "Web Software Engineer",
        url: ""
      }
    ],
    image: {
      src: "assets/pr_su.jpg",
      alt: "Southwestern University"
    },
    experiments: []
  };


  describe('base tests', () => {
    beforeEach(() => {
      component = shallow(<App />);
    });


    it('matches snapshot', async() => {
      await new Promise(res => setTimeout(() => {
        expect(component).toMatchSnapshot();

        res();
      }, API_DELAY * 2))
    });


    it('renders 4 components', async() => {
      // timeout is equal to api delay + 1ms
      await new Promise(res => setTimeout(() => {
        expect(component.children()).toHaveLength(4);
        expect(component.find(Home)).toBeTruthy();
        expect(component.find(About)).toBeTruthy();
        expect(component.find(Projects)).toBeTruthy();
        expect(component.find(Contact)).toBeTruthy();

        res();
      }, API_DELAY * 2))
    });
  });


  describe('states tests', () => {
    beforeEach(() => {
      component = shallow(<App />);
    });


    it('renders loading indicator', () => {
      component.setState({isFetching: true});
      expect(component.find(Loader)).toHaveLength(1);
      expect(component.state().isFetching).toBe(true);
      component.setState({isFetching: false});
    });


    it('renders error message', () => {
      component.setState({error: errorMessage});
      expect(component.find(RequestError)).toHaveLength(1);
      expect(component.state().error).toBe(errorMessage);
      component.setState({error: null});
    });


    it('renders personData', () => {
      component.setState({personData: {person}});
      expect(component.state().personData.person).toEqual(person);
      component.setState({personData: {}});
    });


    it('renders projectsData', () => {
      component.setState({projectsData: {projects}});
      expect(component.state().projectsData.projects).toEqual(projects);
      component.setState({projectsData: {}});
    });
  });


  describe('lifecycle tests', () => {
    it('calls componentDidMount', () => {
      const spy = jest.spyOn(App.prototype, 'componentDidMount');
      // eslint-disable-next-line
      component = mount(<App />);
      expect(spy).toHaveBeenCalledTimes(1);

      afterEach(() => {
        spy.mockClear();
      });
    });
  });
});
