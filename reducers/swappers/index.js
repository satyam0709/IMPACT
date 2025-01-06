import { createAction, handleActions } from "redux-actions";

const initialState = [];

export const SET_CURRENT_SWAPPERS = "SET_CURRENT_SWAPPERS";
export const setCurrentSwappers = createAction(SET_CURRENT_SWAPPERS);


import { createAction, handleActions } from "redux-actions";

export const SET_CURRENT_SELECTION = "SET_CURRENT_SELECTION";
export const setCurrentSelection = createAction(SET_CURRENT_SELECTION);

export const SET_CURRENT_INSERTION = "SET_CURRENT_INSERTION";
export const setCurrentInsertion = createAction(SET_CURRENT_INSERTION);

export const currentSelection = handleActions(
  {
    SET_CURRENT_SELECTION: (state, { payload }) => payload,
  },
  initialState
);

export const currentInsertion = handleActions(
  {
    SET_CURRENT_INSERTION: (state, { payload }) => payload,
  },
  initialState
);



export const currentSwappers = handleActions({
  SET_CURRENT_SWAPPERS: (state, { payload }) => {
    if (payload.length) {
      return state.concat(payload);
    } else {
      return [];
    }
  },
}, initialState);
