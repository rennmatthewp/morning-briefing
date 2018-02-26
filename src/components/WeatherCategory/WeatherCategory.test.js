import React from 'react';
import { shallow } from 'enzyme';
import { WeatherCategory } from './WeatherCategory';
import { expectedWeatherObj } from '../../mockData';

describe('WeatherCategory', () => {
  it('should match the snapshot', () => {
    const renderedNewsSection = shallow(
      <WeatherCategory weather={expectedWeatherObj} />
    );
    expect(renderedNewsSection).toMatchSnapshot();
  });
});
