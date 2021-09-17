import DATA from '../../../DATA';

const INITIAL_STATE = {
  chatData: DATA,
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      break;

    default:
      break;
  }
};
