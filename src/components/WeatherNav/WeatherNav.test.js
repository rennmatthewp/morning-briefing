import React from 'react';
import { shallow } from 'enzyme';
import { WeatherNav } from './WeatherNav';

describe('WeatherNav', () => {
  let renderedWeatherNav;
  let mockSelectCategory;

  beforeEach(() => {
    mockSelectCategory = jest.fn();
    renderedWeatherNav = shallow(
      <WeatherNav selectCategory={mockSelectCategory} />
    );
  });

  it('should match the snapshot', () => {
    expect(renderedWeatherNav).toMatchSnapshot();
  });

  it('should call selectSection onClick of a NavLink', () => {
    renderedWeatherNav
      .find('NavLink')
      .first()
      .simulate('click');
    expect(mockSelectCategory).toHaveBeenCalled();
  });
});
