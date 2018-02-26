import React from 'react';
import { WeatherCard } from './WeatherCard';
import { shallow } from 'enzyme';
import { expectedWeatherObj } from '../../mockData';

describe('WeatherCard', () => {
  it('should match the snapshot', () => {
    const mockWeatherObj = expectedWeatherObj
    const renderedWeatherCard = shallow(<WeatherCard weather={mockWeatherObj} />);
    expect(renderedWeatherCard).toMatchSnapshot();
  });
});
