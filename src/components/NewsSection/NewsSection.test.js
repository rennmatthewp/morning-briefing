import React from 'react';
import { shallow } from 'enzyme';
import { NewsSection } from './NewsSection';
import { expectedNewsObj } from '../../mockData';

describe('NewsSection', () => {
  it('should match the snapshot', () => {
    const renderedNewsSection = shallow(
      <NewsSection newsStories={expectedNewsObj} />
    );
    expect(renderedNewsSection).toMatchSnapshot();
  });
});
