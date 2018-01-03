export default (state = 50, action) => {
  switch (action.type) {
    case 'set_progress':
      return action.payload;
    default:
      return state
  }
};