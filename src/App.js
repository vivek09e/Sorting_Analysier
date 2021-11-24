import React, { Component } from 'react';
import './App.css';
import './AppDark.css';

import AppControls from './components/units/AppControls';
import TopBar from './components/frontend/TopBar';
import SortVisualizer from './components/frontend/SortVisualizer';
import bubbleSort, {bubbleSortKey, bubbleSortDesc} from './algorithms/bubbleSort';
import selectionSort, {selectionSortKey, selectionSortDesc} from './algorithms/selectionSort';
import insertionSort, {insertionSortKey, insertionSortDesc} from './algorithms/insertionSort';
import mergeSort, {mergeSortKey, mergeSortDesc} from './algorithms/mergeSort';
import quickSort, {quickSortKey, quickSortDesc} from './algorithms/quickSort';

class App extends Component {
  
  state = { darkMode: false, array: [], arraySize: 10, trace: [], algorithm: null };

  ALGORITHM = {
    'Bubble Sort': bubbleSort,
    'Selection Sort': selectionSort,
    'Insertion Sort': insertionSort,
    'Merge Sort': mergeSort,
    'Quick Sort': quickSort
  };//dictionary of chosen algorithm and corresponding sort algorithm

  ALGORITHM_KEY = {
    'Bubble Sort': bubbleSortKey,
    'Selection Sort': selectionSortKey,
    'Insertion Sort': insertionSortKey,
    'Merge Sort': mergeSortKey,
    'Quick Sort': quickSortKey
  };//dictionary of chosen algorithm and corresponding sort algorithm key

  ALGORITHM_DESC = {
    'Bubble Sort': bubbleSortDesc,
    'Selection Sort': selectionSortDesc,
    'Insertion Sort': insertionSortDesc,
    'Merge Sort': mergeSortDesc,
    'Quick Sort': quickSortDesc
  };//dictionary of chosen algorithm and corresponding sort description

  componentDidMount() {
    document.title = "It\'s Sorted!"
    this.generateArray();
  }

  generateArray = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }
    const array = Array(this.state.arraySize)
      .fill(0).map(() => getRandomInt(this.state.arraySize * 10));
    this.setState({array,trace: []}, this.createTrace);
  };

  handleAlgorithmChange = (algorithm) => {
    this.setState({algorithm}, this.generateArray);
  };

  handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    this.setState({arraySize: size}, this.generateArray);
  };

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = this.ALGORITHM[this.state.algorithm];
    if(sort) {
      const trace = sort(numbers);
      this.setState({trace});
    }
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    let theme = `App`;
    if (this.state.darkMode) theme += ` App_dark`;
    const colorKey = this.ALGORITHM_KEY[this.state.algorithm];
    const description = this.ALGORITHM_DESC[this.state.algorithm];
    const controls = (
      <AppControls
        onGenerateArray={this.generateArray}
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
        onToggleDarkMode={this.toggleDarkMode}
        darkMode={this.state.darkMode}
      />
    );

    return (
      <div className={theme}>
        <TopBar>
          {controls}
        </TopBar>
        <main className="App__Body">
          <SortVisualizer
            array={this.state.array}
            trace={this.state.trace}
            colorKey={colorKey}
            desc={description}
          />
        </main>
      </div>
    );
  }
}

export default App;
