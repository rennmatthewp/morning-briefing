import React from 'react';
import NewsCard from './NewsCard';
import { shallow } from 'enzyme';
import { expectedNewsObj } from '../../mockData/';

describe('NewsCard', () => {
  it('should match the snapshot', () => {
    const article = expectedNewsObj[0];
    const renderedNewsCard = shallow(<NewsCard {...article} />);
    expect(renderedNewsCard).toMatchSnapshot();
  });
});
