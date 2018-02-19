import { newsReducer } from './newsReducer';

describe('news reducer', () => {
  it('should return the initial state', () => {
    expect(newsReducer(undefined, {})).toEqual([]);
  });

  it('should return state populated with news stories', () => {
    const storiesArray = [{}, {}, {}];
    const mockAction = {
      type: 'POPULATE_NEWS',
      storiesArray
    };

    expect(newsReducer(undefined, mockAction)).toEqual(storiesArray);
  });
});
