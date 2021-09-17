import DATA from '../../DATA';

const INITIAL_STATE = {
  chatMessages: DATA,
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload],
      };

    default:
      return state;
  }
};

export default chatReducer;
