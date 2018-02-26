import React from 'react';
import { NewsContainer, mapStateToProps } from './NewsContainer';
import { shallow } from 'enzyme';
import { expectedNewsObj } from '../../mockData';

describe('NewsContainer', () => {
  it('should match the snapshot', () => {
    const renderedNewsContainer = shallow(
      <NewsContainer newsStories={expectedNewsObj} />
    );
    expect(renderedNewsContainer).toMatchSnapshot();
  });

  it('should correctly map the store', () => {
    const mapped = mapStateToProps({ newsStories: expectedNewsObj });

    expect(mapped.newsStories).toEqual(expectedNewsObj);
  });
});
