import { UserState } from '../types';
import * as types from '../actions/types';

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case types.LOGOUT:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case types.SET_USER_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer; 