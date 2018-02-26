import React from 'react';
import { shallow } from 'enzyme';
import { WeatherContainer, mapStateToProps } from './WeatherContainer';
import { expectedWeatherObj } from '../../mockData';

describe('WeatherContainer', () => {
  it('should match the snapshot', () => {
    const renderedWeatherContainer = shallow(
      <WeatherContainer {...expectedWeatherObj} />
    );
    expect(renderedWeatherContainer).toMatchSnapshot();
  });

  it('should correctly map state to props', () => {
    const mapped = mapStateToProps({
      weather: expectedWeatherObj
    });

    expect(mapped.currentObservation).toEqual(
      expectedWeatherObj.currentObservation
    );
    expect(mapped.hourlyForecast).toEqual(expectedWeatherObj.hourlyForecast);
  });
});
