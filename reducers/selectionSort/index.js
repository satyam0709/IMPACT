import { createAction, handleActions } from "redux-actions";

// Initial State
const initialState = [];

// Action Types
export const SET_SELECTION_SORT = "SET_SELECTION_SORT";

// Action Creators
export const setSelectionSort = createAction(SET_SELECTION_SORT);

// Reducer
export const selectionSort = handleActions(
  {
    [SET_SELECTION_SORT]: (state, { payload }) => payload,
  },
  initialState
);
