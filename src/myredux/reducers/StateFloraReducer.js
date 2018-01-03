export default (state = 'normal', action) => {
  switch (action.type) {
    case 'set_state_flora':
      return action.payload;
    default:
        return state;
  }
};