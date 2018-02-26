import React from 'react';
import { shallow } from 'enzyme';
import {
  WeatherContainer,
  mapStateToProps,
  mapDispatchToProps
} from './WeatherContainer';
import { expectedWeatherObj } from '../../mockData';

describe('WeatherContainer', () => {
  let renderedWeatherContainer;
  let mockPopulateWeather;

  beforeEach(() => {
    mockPopulateWeather = jest.fn();
    renderedWeatherContainer = shallow(
      <WeatherContainer
        weather={expectedWeatherObj}
        populateWeather={mockPopulateWeather}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(renderedWeatherContainer).toMatchSnapshot();
  });

  it('should correctly map state to props', () => {
    const mapped = mapStateToProps({
      weather: expectedWeatherObj
    });

    expect(mapped.weather).toEqual(expectedWeatherObj);
  });

  it('should call the dispatch fn when calling a fn from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.populateWeather();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
