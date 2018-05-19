// eslint-disable-next-line
import { shallow, render, mount } from 'enzyme';
import axios from 'axios';
import React from 'react';
import { URL_PATH_EDUCATIONS } from '../constants/index';
import Educations from '../components/Educations/index';
import withFetching from './api';


jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));


describe('WithFetching', () => {
  const WithFetching = withFetching(URL_PATH_EDUCATIONS, Educations);
  let wrapper;


  it('checks that axios get request was called only once', () => {
    // eslint-disable-next-line
    wrapper = shallow(<WithFetching />);

    return Promise.resolve().then(() => {}).then(() => {}).then(() => {})
      .then(() => {
        expect(axios.get).toHaveBeenCalledTimes(1);
      });
  });


  it('should fetch educations', () => {
    // eslint-disable-next-line
    const educations = ['High'];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        data: {
          educations,
        },
      }));

    // eslint-disable-next-line
    wrapper = shallow(<WithFetching />);

    return Promise.resolve().then(() => {}).then(() => {}).then(() => {})
      .then(() => {
        expect(wrapper.state().data.educations).toEqual(educations);
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
