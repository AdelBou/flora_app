export default (state = 0, action) => {
  switch (action.type) {
    case 'set_houre':
      return action.payload;
    default:
      return state;
  }
};