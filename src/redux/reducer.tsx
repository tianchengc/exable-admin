// reducers
import { SET_CLICKED_BUTTON, SET_HOVERED_BUTTON } from './action';

const initialState = {
  clickedButton: null,
  hoveredButton: null,
};

const buttonReducer = (
  state = initialState,
  action: { type: any; payload: any },
) => {
  switch (action.type) {
    case SET_CLICKED_BUTTON:
      return { ...state, clickedButton: action.payload };
    case SET_HOVERED_BUTTON:
      return { ...state, hoveredButton: action.payload };
    default:
      return state;
  }
};

export default buttonReducer;
