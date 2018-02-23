import React from 'react';
import { WeatherCard } from './WeatherCard';
import { shallow } from 'enzyme';
import { expectedWeatherObj } from '../../mockData';

describe('WeatherCard', () => {
  it('should match the snapshot', () => {
    const mockWeatherObj = expectedWeatherObj.currentObservation;
    const renderedWeatherCard = shallow(<WeatherCard {...mockWeatherObj} />);
    expect(renderedWeatherCard).toMatchSnapshot();
  });

  it('should match the snapshot', () => {
    const mockWeatherObj = expectedWeatherObj.hourlyForecast[1];
    const renderedWeatherCard = shallow(<WeatherCard {...mockWeatherObj} />);
    expect(renderedWeatherCard).toMatchSnapshot();
  });
});
