export default (state = false, action) => {
  switch (action.type) {
    case 'set_did_eat':
      return action.payload;
    default:
      return state;
  }
};