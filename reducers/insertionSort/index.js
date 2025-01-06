import { createAction, handleActions } from "redux-actions";

// Initial State
const initialState = [];

// Action Types
export const SET_INSERTION_SORT = "SET_INSERTION_SORT";

// Action Creators
export const setInsertionSort = createAction(SET_INSERTION_SORT);

// Reducer
export const insertionSort = handleActions(
  {
    [SET_INSERTION_SORT]: (state, { payload }) => payload,
  },
  initialState
);
