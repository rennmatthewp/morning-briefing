import React from 'react';
import {
  NewsContainer,
  mapStateToProps,
  mapDispatchToProps
} from './NewsContainer';
import { shallow } from 'enzyme';
import { expectedNewsObj } from '../../mockData';

describe('NewsContainer', () => {
  it('should match the snapshot', () => {
    const mockPopulateNews = jest.fn();
    const renderedNewsContainer = shallow(
      <NewsContainer newsStories={expectedNewsObj} />
    );
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
