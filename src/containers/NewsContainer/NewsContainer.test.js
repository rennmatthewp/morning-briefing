import React from 'react';
import {
  NewsContainer,
  mapStateToProps,
  mapDispatchToProps
} from './NewsContainer';
import { shallow } from 'enzyme';
import { expectedNewsObj } from '../../mockData';

describe('NewsContainer', () => {
  let mockPopulateNews;
  let renderedNewsContainer;

  beforeEach(() => {
    mockPopulateNews = jest.fn();
    renderedNewsContainer = shallow(
      <NewsContainer
        newsStories={expectedNewsObj}
        populateNews={mockPopulateNews}
      />
    );
  });
  it('should match the snapshot', () => {
    expect(renderedNewsContainer).toMatchSnapshot();
  });

  it('should correctly map the store', () => {
    const mapped = mapStateToProps({ newsStories: expectedNewsObj });

    expect(mapped.newsStories).toEqual(expectedNewsObj);
  });

  it('should call the dispatch fn when calling a fn from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.populateNews();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
