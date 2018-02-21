import { weatherReducer } from './weatherReducer';

describe('weather reducer', () => {
  it('should return the default state', () => {
    expect(weatherReducer(undefined, {})).toEqual({});
  });

  it('should return the new state with weather data', () => {
    const weatherObj = {};
    const mockAction = {
      type: 'POPULATE_WEATHER',
      weatherObj
    };

    expect(weatherReducer(undefined, mockAction)).toEqual(weatherObj);
  });
});
