import { combineReducers } from 'redux';
import { array } from './array';
import { algorithm } from './algorithm';
import { currentBubbleTwo } from './bubbleSort';
import { currentQuickTwo, pivot } from './quickSort';
import { selectionSort } from './selectionSort';
import { insertionSort } from './insertionSort';
import { currentSwappers } from './swappers';
import { currentHeapThree } from './heapSort';
import { currentSorted } from './sorted';
import { currentMergeX } from './mergeSort';
import { isRunning } from './running';

const rootReducer = combineReducers({
  array,
  algorithm,
  currentBubbleTwo,
  currentQuickTwo,
  pivot,
  selectionSort,
  insertionSort,
  currentSwappers,
  currentHeapThree,
  currentSorted,
  currentMergeX,
  isRunning,
});

export default rootReducer;
