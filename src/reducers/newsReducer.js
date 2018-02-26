export const newsReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_NEWS':
      return action.storiesArray;
    default:
      return state;
  }
};
