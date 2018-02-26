import React from 'react';
import { shallow } from 'enzyme';
import { NewsNav } from './NewsNav';

describe('NewsNav', () => {
  let renderedNewsNav;
  let mockSelectSection;

  beforeEach(() => {
    mockSelectSection = jest.fn();
    renderedNewsNav = shallow(<NewsNav selectSection={mockSelectSection} />);
  });

  it('should match the snapshot', () => {
    expect(renderedNewsNav).toMatchSnapshot();
  });

  it('should call selectSection onClick of a NavLink', () => {
    renderedNewsNav
      .find('NavLink')
      .first()
      .simulate('click');
    expect(mockSelectSection).toHaveBeenCalled();
  });
});
