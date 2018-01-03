export default (state = false, action) => {
  switch (action.type) {
    case 'set_hangry':
      return action.payload;
    default:
      return state;
  }
};