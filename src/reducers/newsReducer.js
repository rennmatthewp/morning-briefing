export const newsReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_NEWS':
      return [...state, ...action.storiesArray];
    default:
      return state;
  }
};
