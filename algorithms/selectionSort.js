"use strict";

import { setArray } from "../reducers/array";
import { setCurrentSorted } from "../reducers/sorted";
import { setRunning } from "../reducers/running";

function selectionSort(stateArray, dispatch, speed) {
  let array = stateArray.slice(0);
  let toDispatch = [];

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      toDispatch.push(array.slice(0));
    }
  }

  handleDispatch(toDispatch, dispatch, array, speed);
  return array;
}

function handleDispatch(toDispatch, dispatch, array, speed) {
  if (!toDispatch.length) {
    dispatch(setCurrentSorted(array.map((_, i) => i)));
    dispatch(setRunning(false));
    return;
  }

  dispatch(setArray(toDispatch.shift()));
  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
}

export default selectionSort;
