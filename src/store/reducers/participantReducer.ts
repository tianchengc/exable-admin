import { ParticipantState } from '../types';
import * as types from '../actions/types';

const initialState: ParticipantState = {
  participants: [],
  loading: false,
  error: null,
};

const participantReducer = (state = initialState, action: any): ParticipantState => {
  switch (action.type) {
    case types.SET_PARTICIPANTS:
      return {
        ...state,
        participants: action.payload,
        error: null,
      };
    case types.ADD_PARTICIPANT:
      return {
        ...state,
        participants: [...state.participants, action.payload],
      };
    case types.UPDATE_PARTICIPANT:
      return {
        ...state,
        participants: state.participants.map(p => 
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case types.REMOVE_PARTICIPANT:
      return {
        ...state,
        participants: state.participants.filter(p => p.id !== action.payload),
      };
    case types.SET_PARTICIPANTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SET_PARTICIPANTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default participantReducer; 