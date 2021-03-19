import { SIGNIN, SIGNOUT } from './user-action-types';

const initialState = {
  isLoggedIn: false,
  token: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return { ...state, isLoggedIn: true, token: action.payload };
    case SIGNOUT:
      return { ...initialState };
    default:
      return state;
  }
}

export { userReducer as default };
