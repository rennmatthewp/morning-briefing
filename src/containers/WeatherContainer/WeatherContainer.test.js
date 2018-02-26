import React from 'react';
import { shallow } from 'enzyme';
import {
  WeatherContainer,
  mapStateToProps,
  mapDispatchToProps
} from './WeatherContainer';
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
    
    expect(mapped.weather).toEqual(expectedWeatherObj);
  });

  it('should call the dispatch fn when calling a fn from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.populateWeather();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
