
export const SET_CURRENT_SELECTION = "SET_CURRENT_SELECTION";
export const setCurrentSelection = createAction(SET_CURRENT_SELECTION);

export const SET_CURRENT_INSERTION = "SET_CURRENT_INSERTION";
export const setCurrentInsertion = createAction(SET_CURRENT_INSERTION);
import { createAction, handleActions } from "redux-actions";

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

const initialState = [];

export const SET_ARRAY = "SET_ARRAY";
export const setArray = createAction(SET_ARRAY);

export const array = handleActions({
  SET_ARRAY: (state, { payload }) => {
    return payload;
  },
}, initialState);
