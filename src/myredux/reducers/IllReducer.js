export default (state = false, action) => {
  switch (action.type) {
    case 'set_ill':
      return action.payload;
    default:
        return state;
  }
};