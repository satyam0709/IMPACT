"use strict";

import { setArray } from "../reducers/array";
import { setCurrentSorted } from "../reducers/sorted";
import { setRunning } from "../reducers/running";

function insertionSort(stateArray, dispatch, speed) {
  let array = stateArray.slice(0);
  let toDispatch = [];

  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      toDispatch.push(array.slice(0));
      j--;
    }
    array[j + 1] = current;
    toDispatch.push(array.slice(0));
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

export default insertionSort;
