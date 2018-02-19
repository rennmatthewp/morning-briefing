import { weatherReducer } from './weatherReducer';

describe('weather reducer', () => {
  it('should return the default state', () => {
    expect(weatherReducer(undefined, {})).toEqual([]);
  });

  it('should return the new state with weather data', () => {
    const weatherArray = [{}, {}, {}];
    const mockAction = {
      type: 'POPULATE_WEATHER',
      weatherArray
    };

    expect(weatherReducer(undefined, mockAction)).toEqual(weatherArray);
  });
});
