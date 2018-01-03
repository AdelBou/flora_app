export default (state = false, action) => {
  switch (action.type) {
    case 'set_dirty':
      return action.payload;
    default:
      return state;
  }
};