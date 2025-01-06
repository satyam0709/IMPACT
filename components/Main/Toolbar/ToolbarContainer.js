import React from "react";
import Toolbar from "./Toolbar.jsx";
import { connect } from "react-redux";
import { setArray } from "../../../reducers/array";
import { setAlgorithm } from "../../../reducers/algorithm";
import { setCurrentSorted } from "../../../reducers/sorted";
import { setRunning } from "../../../reducers/running";
import bubbleSort from "../../../algorithms/bubbleSort";
import quickSort from "../../../algorithms/quickSort";
import heapSort from "../../../algorithms/heapSort";
import mergeSort from "../../../algorithms/mergeSort";
import insertionSort from "../../../algorithms/insertionSort";
import selectionSort from "../../../algorithms/selectionSort";
import { Link } from 'react-router-dom';

const algorithmMap = {
  bubbleSort,
  quickSort,
  heapSort,
  mergeSort,
  insertionSort,
  selectionSort,
};

const mapStateToProps = ({ array, algorithm, isRunning }) => ({
  array,
  algorithm,
  isRunning,
});

const mapDispatchToProps = (dispatch) => ({
  generateArray: (length) => {
    const array = [];
    while (array.length < length) {
      array.push(Math.floor(Math.random() * 200) + 10);
    }
    dispatch(setArray(array));
    dispatch(setCurrentSorted([]));
  },
  updateAlgorithm: (algorithm) => {
    dispatch(setAlgorithm(algorithm));
  },
  sort: (algorithm, array, speed) => {
    const doSort = algorithmMap[algorithm];
    dispatch(setCurrentSorted([]));
    dispatch(setRunning(true));
    doSort(array, dispatch, speed);
  },
});

const ToolbarContainer = ({ generateArray, updateAlgorithm, sort }) => {
  return (
    <div>
      <Toolbar
        generateArray={generateArray}
        updateAlgorithm={updateAlgorithm}
        sort={sort}
      />
      <Link to="/quiz">
        <button>Take Quiz</button>
      </Link>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarContainer);