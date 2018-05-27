// eslint-disable-next-line
import { shallow, render, mount } from 'enzyme';
import axios from 'axios';
import React from 'react';
import { URL_PATH_PROJECTS } from '../constants/index';
import Projects from '../components/Pages/Projects/index';
import withFetching from './api';


jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));


describe('WithFetching', () => {
  const WithFetching = withFetching(URL_PATH_PROJECTS, Projects);
  let wrapper;


  it('checks that axios get request was called only once', () => {
    // eslint-disable-next-line
    wrapper = shallow(<WithFetching />);

    return Promise.resolve().then(() => {}).then(() => {}).then(() => {})
      .then(() => {
        expect(axios.get).toHaveBeenCalledTimes(1);
      });
  });


  it('should fetch projects', () => {
    // eslint-disable-next-line
    const projects = ['High'];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        data: {
          projects,
        },
      }));

    // eslint-disable-next-line
    wrapper = shallow(<WithFetching />);

    return Promise.resolve().then(() => {}).then(() => {}).then(() => {})
      .then(() => {
        expect(wrapper.state().data.projects).toEqual(projects);
      });
  });


  it('should handle response error', () => {
    const error = 'Something went wrong ...';

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: 404,
        error,
      }));

    wrapper = shallow(<WithFetching />);

    return Promise.resolve().then(() => {}).then(() => {}).then(() => {})
      .then(() => {
        expect(wrapper.state().error).toEqual(error);
      });
  });


  afterEach(() => {
    axios.get.mockClear();
  });
});
