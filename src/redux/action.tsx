// actions
export const SET_IS_HOVERED_INDEX = 'SET_IS_HOVERED_INDEX';
export const SET_SELECTED_INDEX = 'SET_SELECTED_INDEX';
export const SET_CLICKED_BUTTON = 'SET_CLICKED_BUTTON';
export const SET_HOVERED_BUTTON = 'SET_HOVERED_BUTTON';
export const SET_SEND_BUTTON = 'SET_SEND_BUTTON';
export const SET_OPEN_DIALOG = 'SET_OPEN_DIALOG';
export const SET_ERROR_MESSAGES = 'SET_ERROR_MESSAGES';
export const SET_INPUT_VALUES = 'SET_INPUT_VALUES';

export const setIsHoveredIndex = index => ({
  type: SET_IS_HOVERED_INDEX,
  payload: index,
});

export const setSelectedIndex = index => ({
  type: SET_SELECTED_INDEX,
  payload: index,
});

export const setClickedButton = (buttonName: any) => ({
  type: SET_CLICKED_BUTTON,
  payload: buttonName,
});

export const setHoveredButton = (buttonName: any) => ({
  type: SET_HOVERED_BUTTON,
  payload: buttonName,
});

export const setSendButton = (buttonName: any) => ({
  type: SET_SEND_BUTTON,
  payload: buttonName,
});

export const setOpenDialog = (buttonName: any) => ({
  type: SET_OPEN_DIALOG,
  payload: buttonName,
});

export const setErrorMessage = (buttonName: any) => ({
  type: SET_ERROR_MESSAGES,
  payload: buttonName,
});

export const setInputValues = (buttonName: any) => ({
  type: SET_INPUT_VALUES,
  payload: buttonName,
});
