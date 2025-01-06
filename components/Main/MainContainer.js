import { connect } from "react-redux";
import Main from "./Main.jsx";
import { setArray } from "../../reducers/array";
import { setCurrentSwappers } from "../../reducers/swappers";
import { setCurrentSorted } from "../../reducers/sorted";
import { setRunning } from "../../reducers/running";
import { setPivot } from "../../reducers/pivot";
import { setCurrentQuickTwo } from "../../reducers/quickSort";
import { setCurrentMergeX } from "../../reducers/mergeSort";
import { setSelectionSort } from "../../reducers/selectionSort";
import { setInsertionSort } from "../../reducers/insertionSort";


const mapStateToProps = (state) => ({
  array: state.array,
  swappers: state.swappers,
  sorted: state.sorted,
  running: state.running,
  pivot: state.quickSort.pivot,
  currentQuickTwo: state.quickSort.currentQuickTwo,
  currentMergeX: state.mergeSort.currentMergeX,
  selectionSort: state.selectionSort,
  insertionSort: state.insertionSort,
});

const mapDispatchToProps = (dispatch) => ({
  setArray: (array) => dispatch(setArray(array)),
  setCurrentSwappers: (swappers) => dispatch(setCurrentSwappers(swappers)),
  setCurrentSorted: (sorted) => dispatch(setCurrentSorted(sorted)),
  setRunning: (running) => dispatch(setRunning(running)),
  setPivot: (pivot) => dispatch(setPivot(pivot)),
  setCurrentQuickTwo: (currentQuickTwo) => dispatch(setCurrentQuickTwo(currentQuickTwo)),
  setCurrentMergeX: (currentMergeX) => dispatch(setCurrentMergeX(currentMergeX)),
  setSelectionSort: (sortedArray) => dispatch(setSelectionSort(sortedArray)),
  setInsertionSort: (sortedArray) => dispatch(setInsertionSort(sortedArray)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
