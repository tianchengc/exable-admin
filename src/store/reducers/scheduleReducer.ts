import { ScheduleState } from '../types';
import * as types from '../actions/types';

const initialState: ScheduleState = {
  schedules: [],
  loading: false,
  error: null,
};

const scheduleReducer = (state = initialState, action: any): ScheduleState => {
  switch (action.type) {
    case types.SET_SCHEDULES:
      return {
        ...state,
        schedules: action.payload,
        error: null,
      };
    case types.ADD_SCHEDULE:
      return {
        ...state,
        schedules: [...state.schedules, action.payload],
      };
    case types.UPDATE_SCHEDULE:
      return {
        ...state,
        schedules: state.schedules.map(s => 
          s.id === action.payload.id ? action.payload : s
        ),
      };
    case types.REMOVE_SCHEDULE:
      return {
        ...state,
        schedules: state.schedules.filter(s => s.id !== action.payload),
      };
    case types.UPDATE_SCHEDULE_STATUS:
      return {
        ...state,
        schedules: state.schedules.map(s => 
          s.id === action.payload.id 
            ? { ...s, status: action.payload.status }
            : s
        ),
      };
    case types.SET_SCHEDULES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SET_SCHEDULES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default scheduleReducer; 