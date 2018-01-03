export default (state = {soda:0,chocolate:0}, action) => {
  switch (action.type) {
    case 'set_eat':
      return action.payload;
    default:
      return state;
  }
};