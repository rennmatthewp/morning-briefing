/*eslint-disable camelcase, max-len*/

import * as mock from '../mockData/';
import {
  getNewsData,
  getWeatherData,
  cleanNewsData,
  cleanWeatherData
} from './apiCalls';

describe('getNewsData', () => {
  it('should call fetch with the expected args', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mock.newsApiResponse)
      })
    );

    getNewsData();

    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=876ab3a49cd74f299c3cbab7279dc6be'
    );
  });

  it('should return a resolved response object', () => {
    expect(getNewsData()).resolves.toEqual(mock.newsApiResponse);
  });

  it('should handle a rejected promise', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500
      })
    );

    expect(getNewsData()).rejects.toEqual(Error('error in getNews'));
  });
});

describe('cleanNewsData', () => {
  it('should return the desired news data', () => {
    expect(cleanNewsData(mock.newsApiResponse.results)).toEqual(
      mock.expectedNewsObj
    );
  });
});

describe('getWeatherData', () => {
  it('should call fetch with the expected args', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mock.weatherApiResponse)
      })
    );

    getWeatherData();

    expect(window.fetch).toHaveBeenCalledWith(
      'http://api.wunderground.com/api/30759bcdaf3f84b4/conditions/hourly/q/CO/Denver.json'
    );
  });

  it('should return a resolved response object', () => {
    expect(getWeatherData()).resolves.toEqual(mock.weatherApiResponse);
  });

  it('should handle a rejected promise', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500
      })
    );
  });
});

describe('cleanWeatherData', () => {
  it('should return the desired weather data', () => {
    expect(cleanWeatherData(mock.weatherApiResponse)).toEqual(
      mock.expectedWeatherObj
    );
  });
});
