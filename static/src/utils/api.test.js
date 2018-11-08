// eslint-disable-next-line
import {shallow, render, mount} from 'enzyme';
import axios from 'axios';
import React from 'react';
import {URL_PATH_PROJECTS} from '../constants/index';
import fetchData from './api';


jest.mock('axios', () => ({
  get: jest.fn(
    () => Promise.resolve(),
    () => Promise.reject()
  ),
}));


describe('fetchData tests', () => {
  const response = {
    status: 200,
    data: {
      person: {
        id: 1,
        first_name: 'Bob',
        last_name: 'Cat',
        email: 'example@admin.com',
        summary: 'blablabla'
      }
    }
  };
  const error = {
    status: 404,
    message: 'Something went wrong'
  };


  it('checks that axios get request was called only once', async() => {
    // eslint-disable-next-line
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: response.status,
        data: response.data
      })
    );

    await fetchData(URL_PATH_PROJECTS);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });


  it('should fetch projects', async() => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: response.status,
        data: response.data
      }));

    const result = await fetchData(URL_PATH_PROJECTS);
    expect(result.person).toEqual(response.data.person);
    expect(result.status).toEqual(response.data.status);
  });


  it('should handle response error', async() => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: error.status,
        message: error.message
      }));

    try {
      await fetchData(URL_PATH_PROJECTS);
    } catch (e) {
      expect(e.message).toEqual(error.message);
      expect(e.status).toEqual(error.status);
    }
  });

  afterEach(() => {
    axios.get.mockClear();
  });
});
