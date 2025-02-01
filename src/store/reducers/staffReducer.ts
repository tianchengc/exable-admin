import { StaffState } from '../types';
import * as types from '../actions/types';

const initialState: StaffState = {
  staffList: [],
  loading: false,
  error: null,
};

const staffReducer = (state = initialState, action: any): StaffState => {
  switch (action.type) {
    case types.SET_STAFF:
      return {
        ...state,
        staffList: action.payload,
        error: null,
      };
    case types.ADD_STAFF:
      return {
        ...state,
        staffList: [...state.staffList, action.payload],
      };
    case types.UPDATE_STAFF:
      return {
        ...state,
        staffList: state.staffList.map(s => 
          s.id === action.payload.id ? action.payload : s
        ),
      };
    case types.REMOVE_STAFF:
      return {
        ...state,
        staffList: state.staffList.filter(s => s.id !== action.payload),
      };
    case types.SET_STAFF_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SET_STAFF_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default staffReducer; 