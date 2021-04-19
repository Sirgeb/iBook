import { userActionTypes } from './user-action-types';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) { 
    case userActionTypes.USER_REGISTER_REQUEST:
    case userActionTypes.USER_LOGIN_REQUEST:
    case userActionTypes.USER_LOGOUT_REQUEST:
    case userActionTypes.USER_SOCIAL_LOGIN_REQUEST:
    return {
      ...state,
      isLoading: true
    }

    case userActionTypes.USER_REGISTER_SUCCESS:
    case userActionTypes.USER_LOGIN_SUCCESS:
    case userActionTypes.USER_SOCIAL_LOGIN_SUCCESS:
    return {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      user: action.payload
    }

    case userActionTypes.USER_LOGOUT_SUCCESS:
    return {
      ...state,
      isLoading: false,
      isLoggedIn: false,
      user: null
    }

    case userActionTypes.USER_REGISTER_FAIL:
    case userActionTypes.USER_LOGIN_FAIL:
    case userActionTypes.USER_LOGOUT_FAIL:
    case userActionTypes.USER_SOCIAL_LOGIN_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.payload
    }
      
    default: 
      return state;
  }
}

export { userReducer as default };
