export default (state = false, action) => {
  switch (action.type) {
    case 'set_sleep':
      return action.payload;
    default:
        return state;
  }
};