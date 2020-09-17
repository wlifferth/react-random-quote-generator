import { REQUEST_QUOTE, ACCEPT_QUOTE } from "./actions";

const quoteReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_QUOTE:
      return Object.assign({}, state, { loading: true });
    case ACCEPT_QUOTE:
      return Object.assign({}, state, {
        text: action.text,
        author: action.author,
        quoteId: action.quoteId,
        loading: false,
      });
    default:
      return state;
  }
};

export default quoteReducer;
