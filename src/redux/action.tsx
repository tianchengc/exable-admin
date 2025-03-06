// actions
export const SET_CLICKED_BUTTON = 'SET_CLICKED_BUTTON';
export const SET_HOVERED_BUTTON = 'SET_HOVERED_BUTTON';

export const setClickedButton = (buttonName: any) => ({
  type: SET_CLICKED_BUTTON,
  payload: buttonName,
});

export const setHoveredButton = (buttonName: any) => ({
  type: SET_HOVERED_BUTTON,
  payload: buttonName,
});
