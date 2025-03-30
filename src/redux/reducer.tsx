// reducers
import {
  SET_IS_HOVERED_INDEX,
  SET_SELECTED_INDEX,
  SET_CLICKED_BUTTON,
  SET_HOVERED_BUTTON,
  SET_SEND_BUTTON,
  SET_OPEN_DIALOG,
  SET_ERROR_MESSAGES,
  SET_INPUT_VALUES,
} from './action';

const initialState = {
  hoveredIndex: null,
  selectedIndex: null,
  clickedButton: null,
  hoveredButton: null,
  sendButton: null,
  openDialog: null,
  errorMessage: null,
  inputValue: null,
};

const buttonReducer = (
  state = initialState,
  action: { type: any; payload: any },
) => {
  switch (action.type) {
    case SET_IS_HOVERED_INDEX:
      return { ...state, hoveredIndex: action.payload };
    case SET_SELECTED_INDEX:
      return { ...state, selectedIndex: action.payload };
    case SET_CLICKED_BUTTON:
      return { ...state, clickedButton: action.payload };
    case SET_HOVERED_BUTTON:
      return { ...state, hoveredButton: action.payload };
    case SET_SEND_BUTTON:
      return { ...state, sendButton: action.payload };
    case SET_OPEN_DIALOG:
      return { ...state, openDialog: action.payload };
    case SET_ERROR_MESSAGES:
      return { ...state, errorMessage: action.payload };
    case SET_INPUT_VALUES:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

export default buttonReducer;
